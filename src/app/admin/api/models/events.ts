import mongoose, { Schema, models, Model } from "mongoose"

export type EventsInterface = {
  name: string;
  date: string;
  eventType: string;
  shortDescription: string;
  detailedDescription?: string;
  coverImageUrl?: string;
  galleryImageUrls?: string[];
  registrationLink?: string;
}

const EventsSchema = new Schema<EventsInterface>({
  name: {
    type: String,
    require: true
  },
  date: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String
  },
  detailedDescription: {
    type: String
  },
  coverImageUrl: {
    type: String
  },
  galleryImageUrls: {
    type: [String]
  },
  registrationLink: {
    type: String
  }
})

const Events: Model<EventsInterface> = models.events || mongoose.model("events", EventsSchema)
//   module.exports = Teams
export default Events;