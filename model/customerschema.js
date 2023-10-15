const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
    
const customerSchema = new mongoose.Schema({
    fName:{type:String, required:true},
    lName:{type:String, required:true},
    email:{type:String, required:true},
    address:{type:String, required:true},
    telno:{type:Number, required:true},
    cmtarea:{type:String, required:true}
});



module.exports = mongoose.model('Customer', customerSchema);