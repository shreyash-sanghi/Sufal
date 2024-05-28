const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Number:{type:Number,required:true},
    Address:{type:String,required:true},
    WhyWeJoin:{type:String,required:true},
    Eid:{type:String,required:true},
})
const Event = mongoose.model("EventsRegister",Events);  
module.exports = Event;