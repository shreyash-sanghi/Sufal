const express = require("express");
const router = new express.Router();
const signup = require("../models/SignUp")
const midelware = require("../midelware/userauth")
const bcrypt = require("bcrypt");

router.post("/sign_up",async(req,res)=>{
 try {
    const {Name,Email,Password} = req.body;
    const hasePassword = await bcrypt.hash(Password,10);
    const result = await signup.create({
        Name,Email,Password:hasePassword
    })
    const token = await result.SignUpToken();
    res.status(202).json({token});
 } catch (error) {
    console.log(error);
    res.status(404).json({error});
 }
})

router.post("/sign_in",async(req,res)=>{
 try {
    const {Email,Password} = req.body;
    const data = await signup.findOne({Email});
    if(data != null || data != undefined){
        const hasePassword = await bcrypt.compare(Password,data.Password);
        if(hasePassword){
            const token = await data.SignUpToken();
            res.status(202).json({Name:data.Name,token,OwnerEmail:process.env.Owner_Email});
        }else{
            res.status(404).json({error:"Please Enter Correct Email & Password..."})
        }
    }
    else{
        res.status(404).json({error:"First Create Account..."})
    }

 } catch (error) {
    console.log(error);
    res.status(404).json({error:"They have some error..."});
 }
})

router.get("/user_auth",midelware,async(req,res)=>{
    try{
      const Name = req.Name;
      res.status(202).json({Name});
    }catch(error){
        res.sendStatus(error);
    }
})
module.exports = router;