import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const records = await prisma.record.findMany();

  return NextResponse.json(records);
}

export async function POST(req: Request) {
  const body = await req.json();

  const record = await prisma.record.create({
    data: {
      resource: body.resource,
      data: body.data,
    },
  });

  return NextResponse.json(record);
}