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
    // if(newUser){
    //   res.send("user already exist")
    // }
    // else{ss
      await newUser.save();
      res.send({msg:"signup successfully"});
    // }s
   
   } catch (error) {
    res.send("Iternal server error from setData");
   }
});

router.post("/getData",async(req,res)=>{
  try {
    console.log("getData")
    const {em,pass}=req.body
    console.log(em,pass)
    const checkUser = await User.find({email:em});
    console.log(checkUser)
    if(checkUser){
      res.send({msg:"login successfully"})
      console.log("loginsuccess")
      res.send(checkUser) 
      
    }
    else{
      res.send({msg:"invalid email or password"})
      console.log("invalid email or password")
    }
  } catch (error) {
    console.error("getData",error)
  }
    
    
})


module.exports = router;