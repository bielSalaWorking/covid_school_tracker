const mongoose = require('mongoose');
const covid_case = require('../../models/covidTest/covidTest');

const positiveCase = mongoose.Schema({
    student_id: {
        type: String,
    },
    test_info: {
        test_id: String,
        test_type: String,
        status: String,
        test_day: Date,
    },
    diagnosis_day: {
        type: Date,
    },
    due_day: {
        type: Date,
    }, 
});
module.exports = mongoose.model('PositiveCase',positiveCase); 

//A partir d'un test que es positiu crearem el nou document de positiveCase
