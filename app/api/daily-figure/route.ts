import { NextResponse } from 'next/server';
import { getFigureForDay } from '../../../data/figures';

export async function GET() {
  try {
    const today = new Date();
    
    const figure = getFigureForDay(today);
    
    return NextResponse.json(
      { 
        success: true, 
        data: figure 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching daily figure:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch daily figure' 
      },
      { status: 500 }
    );
  }
}
