import { NextResponse } from "next/server";

const notifications = [
  {
    id: 1,
    message: "Student record created",
  },
];

export async function GET() {
  return NextResponse.json(notifications);
}