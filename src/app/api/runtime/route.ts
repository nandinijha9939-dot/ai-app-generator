import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { runWorkflow } from "@/lib/workflow";
export async function GET() {
  const records = await prisma.record.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(records);
}

export async function POST(req: Request) {

  const body = await req.json();

  const record = await prisma.record.create({
    data: {
      resource: "students",
      data: body,
    },
  });

//   await runWorkflow(
//   "students",
//   body
// );
  return NextResponse.json(record);
}