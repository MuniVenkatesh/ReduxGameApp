import express from "express";
import gameSchema from "../Schema/gameSchema.js"
var route=express.Router();

route.get("/",(req,res)=>{
  gameSchema.find({},(err,data)=>{
    res.send(data);
  })
});

export default route;
