import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Design Nuvio",
    version: "1.0.0",
    status: "operational",
  });
}
