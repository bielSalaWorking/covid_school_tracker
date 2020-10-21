const mongoose = require('mongoose');
const covid_case = require('../covid_case/covid_case');

const covid_positive = mongoose.Schema({
    student_id: {
        type: String,
    },
    test_info: {
        type: covid_case,
        required: true
    },
    diagnosis_day: {
        type: Date,
    },
    due_day: {
        type: Date,
    }, 
});
module.exports = mongoose.model('covid_positive',Covid_positive);