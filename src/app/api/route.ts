import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Astra Studio",
    version: "1.0.0",
    status: "operational",
  });
}
