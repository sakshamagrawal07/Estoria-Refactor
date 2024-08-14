import { NextRequest, NextResponse } from 'next/server'
import Teams from '../models/teams';
import { ObjectId } from 'mongodb';
import { ConnectDB } from '../route';
import { differentTeams } from '@/lib/differentTeams';

ConnectDB()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const request = await req.json();
        const data = {
            "name": request.name,
            "position": request.position,
            "teams": request.teams,
            "insta": request.insta,
            "linkedin": request.linkedin,
            "github": request.github,
            "imageUrl": request.imageUrl
        }
        const res = await Teams.create(data)
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
        const res = await Teams.find({})
        const data = differentTeams.reduce((acc, key) => {
            //@ts-ignore
            acc[key] = [];
            res.forEach(member => {
                if (member.teams.includes(key)) {
                    //@ts-ignore
                    acc[key].push(member);
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
            message: "Error getting data from database",
        },{
            status:500
        })
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {

    try {
        const id = req.nextUrl.searchParams.get('_id');
        const res = await Teams.deleteOne({
            "_id": new ObjectId(id!.toString())
          });
        return NextResponse.json({
            message: "Deleted",
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error deleting data from database",
        },{
            status:500
        })
    }
}