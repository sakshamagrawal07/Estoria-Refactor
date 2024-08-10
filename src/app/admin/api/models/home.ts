import mongoose, { Schema, models, Model } from "mongoose"

export type HomeInterface={
  title?:string;
  cardType?:string;
  description:string;
  image?:string;
  imageUrls?:string[];
}

const HomeSchema = new Schema<HomeInterface>({
    title: {
      type: String
    },
    cardType: {
      type: String
    },
    description: {
      type: String,
      require: true
    },
    image:{
      type: String
    },
    imageUrls:{
      type: [String]
    }
  })
  
  const Home:Model<HomeInterface> = models.home ||  mongoose.model("home", HomeSchema)
//   module.exports = Teams
  export default Home;