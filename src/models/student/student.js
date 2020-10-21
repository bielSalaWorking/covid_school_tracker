const mongoose = require('mongoose');

const school = require('../school/school');

const student = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    address: {
        direction: String,
        number:  Number
    },
    contact_info: {
        phone:  String,
        email:  String,
    },
    classroom: {
        type: String,
        required: true,
    },
    school: {
       type: String,
       required: true, 
    },
    isInQuarantine: {
        type: Boolean,
        default: false
    },
    isPositive: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Student',student);