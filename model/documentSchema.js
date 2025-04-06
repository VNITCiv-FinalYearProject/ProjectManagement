const mongoose = require('mongoose');
const {Schema} = mongoose

const documentSchema = new Schema({
  drawings: [
    {
      title: String,
      link: String,
      date: { type: Date, default: Date.now },
      image: String
    }
  ],

  tenders: [
    {
      title: String,
      link: String,
      date: { type: Date, default: Date.now },
      image: String
    }
  ]
})

module.exports = mongoose.model('Document', documentSchema)