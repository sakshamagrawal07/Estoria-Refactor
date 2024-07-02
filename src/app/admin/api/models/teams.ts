import mongoose, { Schema, models, Model } from "mongoose"

export type TeamMember = {
  name: string;
  position: string;
  teams: string[];
  insta?: string;
  linkedin?: string;
  github?: string;
  imageUrl?: string;
}

const teamSchema = new Schema<TeamMember>({
  name: {
    type: String,
    require: true
  },
  position: {
    type: String,
    required: true
  },
  teams: {
    type: [String],
    required: true
  },
  insta: {
    type: String
  },
  linkedin: {
    type: String
  },
  github: {
    type: String
  },
  imageUrl:{
    type: String
  }
})

const Teams: Model<TeamMember> = models.teams || mongoose.model("teams", teamSchema)
export default Teams