const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String,
        require: true,
    },
    video: {
        type: String,
        require: true,
    }
})

const Uploader = mongoose.model('video', uploadSchema);

module.exports = Uploader;
