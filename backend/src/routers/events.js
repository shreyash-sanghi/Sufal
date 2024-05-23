const express = require("express");
const router = new express.Router();
const Current = require("../models/Event");
// const CurreateReg = require("../models/RegisterForm");
const mongoose = require("mongoose")
const cloudinary = require("cloudinary");

cloudinary.config({
   cloud_name: 'djyu9nhjf',
   api_key: '228761211916383',
   api_secret: 'hsSw1SigoziE2LjKk-0rYyW6YEc'
 });

router.get("/get_current_event_data",async(req,res)=>{
    try {
       const result = await Current.find();
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })


 router.post("/uplodeEventData",async(req,res)=>{
    try {
       const {EventName,public_id,Formfields, Discreption, Place, EDate,Time,EventBanner,CurrentConform,PastConform} = req.body;
       const result = await Current.create({
        EventName,Formfields, Discreption,public_id, Place, EDate,Time,EventBanner,CurrentConform,PastConform
       })
       res.sendStatus(202);
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })

   router.post("/send_to_past_event/:id",async(req,res)=>{
      try{
         const id = req.params.id;
          const result = await Current.findByIdAndUpdate(id,{
            PastConform:true,
            CurrentConform:false
         });
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })

   router.delete("/delete_all_registration/:id",async(req,res)=>{
      try{
         const id = req.params.id;
          const result = await Current.findById(id);
          await Current.findByIdAndUpdate(id,{RegisterData:[]})
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })


   router.delete("/delete_event/:id",async(req,res)=>{
      try{
         const id = req.params.id;
         const data = await Current.findById(id);
         const public_id = data.public_id;
         console.log(public_id)
       cloudinary.v2.uploader.destroy(public_id,async(err,result)=>{
         console.log(err,result);
      });
     
          const result = await Current.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })


router.post("/delete_register/:eid",async(req,res)=>{
   try{
      const id = req.params.eid;
      const data = req.body.uid;
const result = await Current.findById(id);
const filteredData = result.RegisterData.filter(item => item.uid != data);
await Current.findByIdAndUpdate(id,{RegisterData:filteredData})
res.sendStatus(202);
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})
router.post("/save_register/:eid",async(req,res)=>{
   try{
      const id = req.params.eid;
      const data = req.body.obj;
const result = await Current.findById(id);
 result.RegisterData.push(data);
await Current.findByIdAndUpdate(id,{RegisterData:result.RegisterData})
res.sendStatus(202);
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})


router.get("/get_cad_data",async(req,res)=>{
   try{
const result = await Current.find();
res.status(202).json({result })
   }catch(error){
      console.log(error);
      res.sendStatus(202);
   }
})


module.exports = router;