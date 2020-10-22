
const createDate = (diagnosisDate) => {
   return new Date(diagnosisDate);
}    
const createDueDate = (diagnosisDate) => {
    const dueDate = new Date(diagnosisDate);
    dueDate.setDate(dueDate.getDate() + 15)

    return dueDate;
};

module.exports = {createDate,createDueDate};