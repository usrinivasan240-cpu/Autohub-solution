import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// POST /api/contact - Submit contact form
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);
    
    // Create contact message
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.service || 'General Inquiry',
        message: validatedData.message,
        type: 'GENERAL',
      },
    });
    
    // Log API call
    await prisma.apiLog.create({
      data: {
        endpoint: '/api/contact',
        method: 'POST',
        responseStatus: 201,
        requestBody: body,
      },
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        data: { id: contactMessage.id }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log failed API call
    await prisma.apiLog.create({
      data: {
        endpoint: '/api/contact',
        method: 'POST',
        responseStatus: 500,
      },
    });
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

// GET /api/contact - Get all contact messages (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');
    
    const where = status ? { status: status as any } : {};
    
    const [messages, total] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
      prisma.contactMessage.count({ where }),
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        messages,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
