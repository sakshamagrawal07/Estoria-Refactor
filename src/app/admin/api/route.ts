import mongoose from "mongoose";
import { ObjectId } from "mongodb"
import { NextRequest, NextResponse } from 'next/server'
import Teams, { TeamMember } from "./models/teams"
import Events, { EventsInterface } from "./models/events"
import Wings, { ClubWings } from './models/wings';
import Home, { HomeInterface } from "./models/home";


const Connection = async () => {
  const url = "mongodb://localhost:27017/estoria"

  try {
    await mongoose.connect(url, { useNewUrlParser: true })
    console.log("Database Connected")
  } catch (err) {
    console.log("Error connecting to Estoria Database")
  }

}

Connection();


export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const request = await req.json();
    const collection = req.nextUrl.searchParams.get('collection');
    // console.log(collection)
    let response;
    if (collection === "teams") {
      // console.log("from api?collection=teams",request)
      const data = {
        "name": request.name,
        "position": request.position,
        "teams": request.teams,
        "insta": request.insta,
        "linkedin": request.linkedin,
        "github": request.github,
        "imageUrl": request.imageUrl
      }
      // console.log(data)
      await addTeams(data)
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "events") {
      const data = {
        "name": request.name,
        "date": request.date,
        "eventType": request.eventType,
        "shortDescription": request.shortDescription,
        "detailedDescription": request.detailedDescription,
        "coverImageUrl": request.coverImageUrl,
        "galleryImageUrls": request.galleryImageUrls
      }
      await addTimelineEvents(data)
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "wings") {
      const data = {
        "name": request.name,
        "wingType": request.wingType,
        "description": request.description
      }
      await addWing(data)
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "home") {
      const data = {
        "title": request?.title,
        "cardType": request?.cardType,
        "description": request.description,
        "image": request?.image,
        "imageUrls": request?.imageUrls
      }
      await addHomeData(data)
        .then((msg) => response = msg)
        .catch((err) => response = err)
    }
    return NextResponse.json({
      message: response
    })

  } catch (error) {
    return NextResponse.json({
      message: "Error with data"
    }, {
      status: 500
    })
  }
}


export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const collection = req.nextUrl.searchParams.get('collection');
    // console.log(collection)
    let response;
    if (collection === "teams") {
      const data = await Teams.find({})
      response = data
    } else if (collection === "events") {
      const data = await Events.find({})
      response = data
    } else if (collection === "wings") {
      const data = await Wings.find({})
      response = data
    } else if (collection === "home") {
      const data = await Home.find({})
      response = data
    }
    return NextResponse.json({
      message: response
    })

  } catch (error) {
    return NextResponse.json({
      message: "Error with params"
    }, {
      status: 500
    })
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const collection = req.nextUrl.searchParams.get('collection');
    const id = req.nextUrl.searchParams.get('_id');
    let response;
    if (collection === "teams") {
      await deleteTeam(id.toString())
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "events") {
      await deleteTimelineEvents(id.toString())
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "wings") {
      await deleteWing(id.toString())
        .then((msg) => response = msg)
        .catch((err) => response = err)
    } else if (collection === "home") {
      await deleteHomeData(id.toString())
        .then((msg) => response = msg)
        .catch((err) => response = err)
    }
    return NextResponse.json({
      message: response
    })

  } catch (error) {
    return NextResponse.json({
      message: "Error with params"
    }, {
      status: 500
    })
  }
}

async function addHomeData(data: HomeInterface): Promise<string> {
  // console.log(data)
  return new Promise((resolve, reject) => {
    try {
      const res = Home.create(data)
      resolve("success")

    } catch (error) {
      reject("Error adding data");
    }
  })
}

async function addTeams(data: TeamMember): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const res = Teams.create(data)
      resolve("success")

    } catch (error) {
      reject("Error adding data");
    }
  })
}

async function addTimelineEvents(data: EventsInterface): Promise<string> {
  // console.log(data)
  return new Promise((resolve, reject) => {
    try {
      const res = Events.create(data)
      resolve("success")

    } catch (error) {
      reject("Error adding data");
    }
  })
}

async function addWing(data: ClubWings): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const res = Wings.create(data)
      resolve("success")

    } catch (error) {
      reject("Error adding data");
    }
  })
}

async function deleteHomeData(_id: string): Promise<string> {

  return new Promise(async (resolve, reject) => {
    try {
      const res = await Home.deleteOne({
        "_id": new ObjectId(_id)
      });
      resolve("deleted")

    } catch (error) {
      // console.log("ID = ",_id)
      // console.log(error)
      reject("Error deleting data");
    }
  })
}

async function deleteTeam(_id: string): Promise<string> {

  return new Promise(async (resolve, reject) => {
    try {
      const res = await Teams.deleteOne({
        "_id": new ObjectId(_id)
      });
      resolve("deleted")

    } catch (error) {
      // console.log("ID = ",_id)
      // console.log(error)
      reject("Error deleting data");
    }
  })
}

async function deleteTimelineEvents(_id: string): Promise<string> {

  return new Promise(async (resolve, reject) => {
    try {
      const res = await Events.deleteOne({
        "_id": new ObjectId(_id)
      });
      resolve("deleted")

    } catch (error) {
      // console.log("ID = ",_id)
      // console.log(error)
      reject("Error deleting data");
    }
  })
}

async function deleteWing(_id: string): Promise<string> {

  return new Promise(async (resolve, reject) => {
    try {
      const res = await Wings.deleteOne({
        "_id": new ObjectId(_id)
      });
      resolve("deleted")

    } catch (error) {
      // console.log("ID = ",_id)
      // console.log(error)
      reject("Error deleting data");
    }
  })
}