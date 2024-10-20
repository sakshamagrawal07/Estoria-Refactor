import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server'
import Home from '../models/home';
import { ConnectDB } from '@/lib/db';

ConnectDB()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const request = await req.json();
        const data = {
            "title": request?.title,
            "cardType": request?.cardType,
            "description": request.description,
            "image": request?.image,
            "imageUrls": request?.imageUrls
        }
        const res = await Home.create(data)
        return NextResponse.json({
            message: "Success",
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error sending data to database",
        },{
            status:500
        })
    }
}

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const data = await Home.find({})
        return NextResponse.json({
            message: data,
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error sending data to database",
        },{
            status:500
        })
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const id = req.nextUrl.searchParams.get('_id');
        const res = await Home.deleteOne({
            "_id": new ObjectId(id!.toString())
        });
        return NextResponse.json({
            message: "Deleted"
        }, {
            status: 200
        })
    } catch (error) {
        console.log("Error : ", error)
        return NextResponse.json({
            message: "Error with params"
        }, {
            status: 500
        })
    }
}