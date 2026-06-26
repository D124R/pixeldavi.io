import { NextResponse } from 'next/server';
import { suggestMembers } from '../../../../lib/mockData';

export async function POST(req){
  const body = await req.json();
  const suggestions = suggestMembers(body);
  return NextResponse.json(suggestions);
}
