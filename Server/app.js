import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import fetch from "./Routes/index.js"
import gameSchema from "./Schema/gameSchema";
import path from "path";
import csv from "csvtojson";
import fs from "fs";


var app=express();

mongoose.connect("mongodb://localhost/test");

const db=mongoose.connection;
db.once("open",()=>{
  console.log("Connected to Mongo");
});

if(gameSchema.count==0){
  var csvReadStream=fs.createReadStream("gameData.csv");

  csv()
    .fromStream(csvReadStream)
    .on("json",(jsonData)=>{
      new gameSchema(jsonData).save();
    })
    .on("end",()=>{
      console.log("csv data saved");
    })
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',express.static(path.join(__dirname,'../Client')));
app.use('/fetch',fetch);

app.listen(7070);
