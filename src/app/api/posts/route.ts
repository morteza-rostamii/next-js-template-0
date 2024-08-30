import { NextRequest, NextResponse } from "next/server";

// next js GET request
export async function GET() {
  return NextResponse.json(
    {
      message: "",
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    {
      message: "",
    },
    { status: 200 }
  );
}
