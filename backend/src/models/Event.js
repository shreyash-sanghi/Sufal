const mongoose = require("mongoose");

const Events = new mongoose.Schema({
    EventName:{type:String,required:true},
    Discreption:{type:String,required:true},
    Place:{type:String,required:true},
    EDate:{type:String,required:true},
    Time:{type:String,required:true},
    EventBanner:{type:String,required:true},
    CurrentConform:{type:Boolean,required:true},
    PastConform:{type:Boolean,required:true},    
    public_id:{type:String,required:true},    
    Formfields:[],    
    RegisterData:[],    
})


const Event = mongoose.model("Events",Events);  
module.exports = Event;