const {createDate,createDueDate} = require('../../utils/createDate');
const {CovidTest} = require('../../models/covidTest/covidTest');

const addFormatedDates = () => {
    return async(req,res,next) => {

        const {diagnosis_day} = req.body;
        const diagnosisDayFormated = createDate(diagnosis_day);
        const dueDateFormated = createDueDate(diagnosisDayFormated);

        req.body.due_day = new Date(dueDateFormated);
        req.body.diagnosis_day = diagnosisDayFormated;

        next();
    }
}


module.exports = addFormatedDates;

     