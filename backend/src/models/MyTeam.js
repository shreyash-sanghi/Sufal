const mongoose = require("mongoose");

const Team = new mongoose.Schema({
    Name:{type:String,required:true},
    Position:{type:String,required:true},
    Gender:{type:String,required:true},
    DOB:{type:String,required:true},
    About:{type:String,required:true},
    FBId:{type:String,required:true},
    InstaId:{type:String,required:true},
    Vision:{type:String,required:true},
    Mission:{type:String,required:true},
    ProfilImage:{type:String,required:true},
    public_id:{type:String,required:true},
    
})

const Myteam = mongoose.model("Myteam",Team);  
module.exports = Myteam;