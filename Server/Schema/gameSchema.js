import mongoose from "mongoose";

const schema=mongoose.Schema({
  title:String,
  platform:String,
  score:Number,
  genre:String,
  editors_choice:String
});

export default mongoose.model("gamedata",schema);
