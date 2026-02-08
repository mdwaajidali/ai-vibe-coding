import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    try {
      const newEntry = await Waitlist.create({ email });
      return NextResponse.json(
        { message: 'Successfully joined the waitlist!', data: newEntry },
        { status: 201 }
      );
    } catch (error: any) {
      if (error.code === 11000) {
        return NextResponse.json(
          { error: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
