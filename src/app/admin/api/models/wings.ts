import mongoose, { Schema, models, Model } from "mongoose"

export type ClubWings={
  name:string;
  wingType:string;
  description:string;
}

const wingsSchema = new Schema<ClubWings>({
    name: {
      type: String,
      require: true
    },
    wingType: {
      type: String,
      required:true
    },
    description: {
      type: String,
      required:true
    }
  })
  
  const Wings:Model<ClubWings> = models.wings ||  mongoose.model("wings", wingsSchema)
//   module.exports = Teams
  export default Wings;