const mongoose = require('mongoose')
const {Schema} = mongoose
// const user = require('../model/userSchema')

const billSchema = new Schema({
    "bill_id": {type:Number},
    "date": {type:Date},
    "Bill_Name" : {type:String},
<<<<<<< HEAD
    "status": {type:Boolean,default:false},
    "Comment" : {type : String,default:"Either approved or to be inspected by higher authority"},
||||||| parent of 7ebcba1 (added auth for billing)
=======
    "status": {type:Boolean,default:false},
>>>>>>> 7ebcba1 (added auth for billing)

    "items": [
        {
            "item_id": {type:Number,required:true},
            "name": {type:String,required:true},
            "quantity": {type:Number,required:true},
            "units" : {type:String,required:true},
            "rate": {type:Number,required:true},
            "amount": {type:Number,required:true}
        }
    ],
    "previous_amount" : Number,
<<<<<<< HEAD
    "total_amount": {type:Number,required:true},
    user_name : {type : String, required : true},
    user_role : {type : String, required : true},
    
||||||| parent of 7ebcba1 (added auth for billing)
    "total_amount": {type:Number,required:true}
=======
    "total_amount": {type:Number,required:true},
    "created_by" : [
       { 
        "name" : {type:String},
        "role" : {type:String}
       }
    ]
>>>>>>> 7ebcba1 (added auth for billing)
},
{
    collection:"bill"
}
);

module.exports = mongoose.model('Bill',billSchema)