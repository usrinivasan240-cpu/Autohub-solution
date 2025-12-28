import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const leadSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceId: z.string().optional(),
  planId: z.string().optional(),
  source: z.string().optional(),
});

// POST /api/leads - Create a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = leadSchema.parse(body);
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });
    
    let user;
    
    if (existingUser) {
      user = existingUser;
    } else {
      // Create new user/lead
      user = await prisma.user.create({
        data: {
          email: validatedData.email,
          name: validatedData.name,
          phone: validatedData.phone,
          company: validatedData.company,
          role: 'LEAD',
          source: validatedData.source || 'website',
        },
      });
    }
    
    // Create lead record
    const lead = await prisma.lead.create({
      data: {
        userId: user.id,
        serviceId: validatedData.serviceId,
        planId: validatedData.planId,
        status: 'NEW',
      },
    });
    
    // Log API call
    await prisma.apiLog.create({
      data: {
        endpoint: '/api/leads',
        method: 'POST',
        responseStatus: 201,
      },
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead created successfully',
        data: { 
          id: lead.id,
          userId: user.id,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead creation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

// GET /api/leads - Get all leads (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');
    
    const where = status ? { status: status as any } : {};
    
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
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
              phone: true,
              company: true,
            },
          },
          service: {
            select: {
              id: true,
              title: true,
            },
          },
          plan: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      prisma.lead.count({ where }),
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        leads,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error('Get leads error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
