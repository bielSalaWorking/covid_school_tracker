const {createDate,createDueDate} = require('../../utils/dueDate');

const addFormatedDates = () => {
    return async(req,res,next) => {

        const {diagnosis_day} = req.body;
        const diagnosisDayFormated = createDate(diagnosis_day);
        const dueDate = createDueDate(diagnosisDayFormated);

        req.body.due_date = dueDateFormated;
        req.body.diagnosis_day = diagnosisDayFormated

        next();
    }
}

module.exports = addFormatedDates;