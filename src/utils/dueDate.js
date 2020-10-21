const dueDate = (quarantineDays) => {
    const date = new Date();
    date.setDate(date.getDate() + quarantineDays);
    
    return new Date(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
}
module.exports = dueDate;