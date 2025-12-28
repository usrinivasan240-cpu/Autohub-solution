import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export function verifyToken(request: NextRequest): JWTPayload | null {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch {
    return null;
  }
}

export function requireAuth(request: NextRequest): NextResponse | null {
  const user = verifyToken(request);
  
  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  return null;
}

export function requireAdmin(request: NextRequest): NextResponse | null {
  const user = verifyToken(request);
  
  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  if (user.role !== 'ADMIN') {
    return NextResponse.json(
      { success: false, message: 'Forbidden' },
      { status: 403 }
    );
  }
  
  return null;
}

export function generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}
