const jwt = require("jsonwebtoken");
const Register = require("../models/SignUp");



const addData = async (req,res,next)=>{
    try {
        const token = req.header('Authorization');
        const varifyUser = jwt.verify(token,process.env.SectetKey);
        const user = await Register.findOne({_id:varifyUser._id})
        req.id = user._id;
        req.name = user.Name;
        next();
    } catch (error) {
        res.status(401).send("error"+error);
    }
}
module.exports = addData;