require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const auth = require("./src/routers/auth")
const events = require("./src/routers/events")
const MyTeam = require("./src/routers/team")
app.use(cors({
    origin:"https://sufal.vercel.app",
    methods:["POST", "GET", "PATCH", "PUT", "DELETE"],
    credential:true
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://sufal.vercel.app",);
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

    mongoose.connect(process.env.Connect_Url)
    .then(()=>{
        console.log("Data base have been connected...")
    }).catch((error)=>console.log(error))

app.use(auth);
app.use(events);
app.use(MyTeam);
app.get("",(req,res)=>{
    try {
        res.send("Hello My name is shreyash jain...")
    } catch (error) {
        res.sendStatus(404);
    }
})

app.listen(port,()=>{
    console.log("Connect Successfully...")
})