import { NextRequest, NextResponse } from 'next/server'
import Events from '../models/events';
import { ObjectId } from 'mongodb';
import { ConnectDB } from '../route';
import { differentEventTypes } from '@/lib/differentEventTypes';

ConnectDB()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const request = await req.json(); const data = {
            "name": request.name,
            "date": request.date,
            "eventType": request.eventType,
            "shortDescription": request.shortDescription,
            "detailedDescription": request.detailedDescription,
            "registrationLink": request.registrationLink,
            "coverImageUrl": request.coverImageUrl,
            "galleryImageUrls": request.galleryImageUrls
        }
        const res = await Events.create(data)
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
        const res = await Events.find({})
        const data = differentEventTypes.reduce((acc, key) => {
            //@ts-ignore
            acc[key] = [];
            res.forEach(event => {
                if (event.eventType.includes(key)) {
                    //@ts-ignore
                    acc[key].push(event);
                }
            });
    
            return acc;
        },{});
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
        const res = await Events.deleteOne({
          "_id": new ObjectId(id!.toString())
        });
        return NextResponse.json({
            message: "Deleted",
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error deleting data from database",
        })
    }
}