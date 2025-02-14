const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = require('../model/userSchema')

const notificationSchema = new Schema({
    "date": { type: Date },
    "notification": { type: String },
    "status": { type: String },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},

{
    collection: "Notification"
})

module.exports = mongoose.model('Notification', notificationSchema);
