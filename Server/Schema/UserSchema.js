const mongoose = require ("mongoose");

const UserSchema= new mongoose.Schema({
   uname :{
    type:String
   },
    mono :{
    type:String
   },
   email :{
    type: String
   },
   pass :{
    type : String
   },
   cpass :{
 type:String
   }

})

const User = new mongoose.model("User",UserSchema);
module.exports=User;