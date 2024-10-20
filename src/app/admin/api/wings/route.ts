import { NextRequest, NextResponse } from 'next/server'
import Wings from '../models/wings';
import { ObjectId } from 'mongodb';
import { ConnectDB } from '@/lib/db';

ConnectDB()

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const request = await req.json();
        const data = {
            "name": request.name,
            "wingType": request.wingType,
            "description": request.description
        }
        const res = await Wings.create(data)
        return NextResponse.json({
            message: "Success",
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error sending data to database",
        }, {
            status: 500
        })
    }
}

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const res = await Wings.find({})
        const wingType = ["Cultural Wings","Non-Cultural Wings"]
        const data = wingType.reduce((acc, key) => {
            //@ts-ignore
            acc[key] = [];
            res.forEach(wing => {
                if (wing.wingType===key) {
                    //@ts-ignore
                    acc[key].push(wing);
                }
            });
    
            return acc;
        },{});
        return NextResponse.json({
            message: data,
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error sending data to database",
        }, {
            status: 500
        })
    }
}


export async function DELETE(req: NextRequest, res: NextResponse) {

    try {
        const id = req.nextUrl.searchParams.get('_id');
        const res = await Wings.deleteOne({
            "_id": new ObjectId(id!.toString())
        });
        return NextResponse.json({
            message: "Deleted",
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error deleting data from database",
        }, {
            status: 500
        })
    }
}