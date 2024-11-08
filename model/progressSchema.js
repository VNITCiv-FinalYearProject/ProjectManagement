// model/progressSchema.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const progressSchema = new Schema({
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true }, // Link to specific project
    image: { type: String, required: true }, // URL or path to image file
    description: { type: String, required: true }, // Description of the image
    date: { type: Date, default: Date.now } // Timestamp for progress update
},  
{
    collection: 'progress' // Collection name
});

module.exports = mongoose.model('Progress', progressSchema);
