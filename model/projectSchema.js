const mongoose = require('mongoose')
const bill = require('./billSchema')
const tender = require('./tenderSchema');
const { Schema } = mongoose

const projectSchema = new Schema({
    title: {type:String,required : true},
    supervisor : {type:String,required : true},
    company : {type:String,required : true},
    overview: {type:String,required : true},
    location: {type:String,required : true},
    duration: {type:String,required : true},
    status: {type:String,required : true},
    startDate: Date,
    progress: {type : Number, min : 0,max : 100},

    bills : [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bill'
      }
    ],
    tender : [
      {
        type: Schema.Types.ObjectId,
        ref: 'tender'
      }
    ]
},

{
  collection: 'project'
}
)

module.exports = mongoose.model('Project',projectSchema)