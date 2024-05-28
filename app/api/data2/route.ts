import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the POST request" });
}
