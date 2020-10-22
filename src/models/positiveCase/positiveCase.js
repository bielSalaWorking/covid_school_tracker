const mongoose = require('mongoose');
const covid_case = require('../../models/covidTest/covidTest');

const positiveCase = mongoose.Schema({
    student_id: {
        type: String,
    },
    test_info: {
        type: covid_case,
        //required: true
    },
    diagnosis_day: {
        type: Date,
    },
    due_day: {
        type: Date,
    }, 
});
module.exports = mongoose.model('PositiveCase',positiveCase);