const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const SignUP = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    
})

SignUP.methods.SignUpToken = async function(){
    try {
        const Token = jwt.sign({_id:this._id},process.env.SectetKey);
        return Token;
    } catch (error) {
      console.log(error);
      res.status(501);
    }
}

const Registration = mongoose.model("SignUp",SignUP);  
module.exports = Registration;