const mongoose = require('mongoose');

const covid_test = mongoose.Schema({
    student_id: {
        type: String,
    },
    test_type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Positive', 'Negative', 'In lab'],
        default: 'In lab'
    },
    diagnostic_day: {
        type: Date,
        default: Date.now()
    }, 
});
module.exports = mongoose.model('CovidTest',covid_test);
