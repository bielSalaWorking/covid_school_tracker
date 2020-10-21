const mongoose = require('mongoose');

const school = new mongoose.Schema({
    name: String,
    address: {
        direction:  String,
        number:  Number
    },
});

module.exports = mongoose.model('School',school);