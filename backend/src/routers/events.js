const express = require("express");
const router = new express.Router();
const Current = require("../models/Event");
// const CurreateReg = require("../models/RegisterForm");
const mongoose = require("mongoose")
router.get("/get_current_event_data",async(req,res)=>{
    try {
       const result = await Current.find();
       res.status(202).json({result});
    } catch (error) {
       console.log(error);
       res.status(404).json({error});
    }
   })
   // Define a function to create a Mongoose schema dynamically
function createDynamicSchema(fields) {
   const dynamicSchemaDefinition = {};
   
   fields.forEach(field => {
       dynamicSchemaDefinition[field.dataName] = {
           type: getType(field.type)
       };
   });

   return dynamicSchemaDefinition;
}

// Define a function to get the appropriate Mongoose schema type based on the 'type' field
function getType(type) {
   switch (type) {
       case 'text':
           return String;
       case 'textarea':
           return String;
       case 'number':
           return Number;
       case 'boolean':
           return Boolean;
       // Add more cases as needed for other types
       default:
           return String // Default to Mixed type if type is not recognized
   }
}
router.post("/uplodeEventData",async(req,res)=>{
    try {
       const {EventName,public_id,Formfields, Discreption, Place, EDate,Time,EventBanner,CurrentConform,PastConform} = req.body;
       const dynamicSchema = createDynamicSchema(Formfields);
       const result = await Current.create({
        EventName,Formfields, Discreption,public_id, Place, EDate,Time,EventBanner,CurrentConform,PastConform
       })
      //  const reg = await CurreateReg.create({
      //    EventName:EventName,Eventid:result._id,DynamicFields:dynamicSchema
      //  })
      // const modelName = 'DynamicModel'; // You can set a dynamic model name if needed
      //   const DynamicModel = mongoose.model(modelName, dynamicSchema);
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

   router.delete("/delete_event/:id",async(req,res)=>{
      try{
         const id = req.params.id;
          const result = await Current.findByIdAndDelete(id);
          res.sendStatus(202);
      }catch(error){
         console.log(error);
        res.sendStatus(404);
      }
   })


router.post("/save_register/:eid",async(req,res)=>{
   try{
      const id = req.params.eid;
      const data = req.body.obj;
const result = await Current.findById(id);
 result.RegisterData.push(data);
console.log(result.RegisterData)
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