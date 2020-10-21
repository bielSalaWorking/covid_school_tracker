const mongoose = require('mongoose');

const classroom = new mongoose.Schema({
    building: {
        type: String,
    },
    capacity: {
        type: String
    },
    name: {
        type: String
    },
    isInQuarantine: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Classroom', classroom);