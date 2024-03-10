const express = require("express");
const router = express.Router();
const User = require("../Schema/UserSchema");

router.post("/setData",async(req,res)=>{
   try {
    console.log("setData")
    const {uname,mono,email,pass,cpass} = req.body;
    // console.log(TodoItem)
    // console.log(req.body)
    //   await Note.create({TodoItem});
    const newUser = new User({uname,mono,email,pass,cpass})
    await newUser.save();
    res.send({msg:"signup successfully"});
   } catch (error) {
    res.send("Iternal server error from setData");
   }
});

router.post("/getData",async(req,res)=>{
  try {
    console.log("getData")
    const {email,pass}=req.body
    console.log(email,pass)
    const user = await User.find({email});
    console.log(user)
    if(user){
      res.send("login successfully")
      res.send(user)
      
    }
    else{
      res.send("invalid email or password")
    }
  } catch (error) {
    console.error("getData",error)
  }
    
    
})


module.exports = router;