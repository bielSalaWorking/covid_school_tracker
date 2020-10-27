const mongoose = require('mongoose');

const covidTestSchema = mongoose.Schema({
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
    test_day: {
        type: Date,
        default: Date.now()
    }, 
});

module.exports = mongoose.model('CovidTest',covidTestSchema);