import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the GET request" });
}

export async function POST (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the POST request" });
}

export async function HEAD (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the HEAD request" });
}

export async function DELETE (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the DELETE request" });
}

export async function PUT (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the PUT request" });
}

export async function PATCH (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the PATCH request" });
}

export async function OPTIONS (request: NextRequest){
    
    return NextResponse.json({ payload: "Response of the OPTIONS request" });
}