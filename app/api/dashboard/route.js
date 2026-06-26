import { NextResponse } from 'next/server';
import { getSummary } from '../../../../lib/mockData';

export async function GET(){
  const data = getSummary();
  return NextResponse.json(data);
}
