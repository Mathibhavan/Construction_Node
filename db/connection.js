const mongoose=require('mongoose');
const express=require('express');
const app= express();
                               

(async ()=>{
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/Construction", {useNewUrlParser: true});
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log(error);
    }
})()