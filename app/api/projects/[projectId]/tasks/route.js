import { NextResponse } from 'next/server';
import { getTasksByProject, createTask } from '../../../../../lib/mockData';

export async function GET(req, { params }){
  const { projectId } = params;
  const t = getTasksByProject(projectId);
  return NextResponse.json(t);
}

export async function POST(req, { params }){
  const { projectId } = params;
  const body = await req.json();
  const payload = { ...body, projectId };
  const task = createTask(payload);
  return NextResponse.json(task, { status: 201 });
}
