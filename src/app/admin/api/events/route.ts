import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const request = await req.json();
        const response: Response = await fetch("http://localhost:3000/admin/api?collection=events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
        let returnResponse;
        if (response.status == 200) returnResponse = "success";
        else returnResponse = "Error from server";
        return NextResponse.json({
            message: returnResponse,
        })
    }catch(error){
        return NextResponse.json({
            message: "Error sending data to database",
        })
    }
}

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const response: Response = await fetch("http://localhost:3000/admin/api?collection=events", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let returnResponse=(await response.json()).message;
        return NextResponse.json({
            message: returnResponse,
        })
    }catch(error){
        return NextResponse.json({
            message: "Error sending data to database",
        })
    }
}


export async function DELETE(req: NextRequest, res: NextResponse) {

    try {
        const id = req.nextUrl.searchParams.get('_id');
        const response: Response = await fetch(`http://localhost:3000/admin/api?collection=events&_id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let returnResponse=(await response.json()).message;
        return NextResponse.json({
            message: returnResponse,
        })
    }catch(error){
        return NextResponse.json({
            message: "Error deleting data from database",
        })
    }
}