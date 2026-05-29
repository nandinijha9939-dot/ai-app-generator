import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  for (const row of body.rows) {
    await prisma.record.create({
      data: {
        resource: "students",
        data: row,
      },
    });
  }

  return NextResponse.json({
    success: true,
  });
}