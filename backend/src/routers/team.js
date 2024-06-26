const express = require("express");
const router = new express.Router();
const AddTeam = require("../models/MyTeam");
const cloudinary = require("cloudinary");

router.post("/save_team_data",async(req,res)=>{
    try {
       const {Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin} = req.body;
       const result = await AddTeam.create({
         Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin
       })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


router.get("/get_team_data",async(req,res)=>{
    try {
       const result = await AddTeam.find();
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


router.post("/update_team_data/:id",async(req,res)=>{
    try {
      const id = req.params.id;
      const {Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin} = req.body;
      console.log(Gender)
      if(ProfilImage=== undefined || ProfilImage===""){
         const result = await AddTeam.findByIdAndUpdate(id,{
            Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,Number,Linkdin
         });
      }else{
         const result = await AddTeam.findByIdAndUpdate(id,{
            Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,ProfilImage,Number,Linkdin
         });
      }
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


router.get("/get_team_data_byid/:id",async(req,res)=>{
    try {
      const id = req.params.id;
       const result = await AddTeam.findById(id);
       
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
   
   router.delete("/delete_previous_image/:pid",async(req,res)=>{
      try{
         const id = req.params.pid;
       cloudinary.v2.uploader.destroy(id,async(err,result)=>{
         console.log(err,result);
       });
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })
   
   router.delete("/delete_team_member/:id",async(req,res)=>{
      try{
         const id = req.params.id;
      //  cloudinary.v2.uploader.destroy(public_id,async(err,result)=>{
      //    console.log(err,result);
      //  });
          await  AddTeam.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })

module.exports = router;