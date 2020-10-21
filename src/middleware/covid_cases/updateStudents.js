const Student = require('../../models/student/student');

const updateStudents = () => {
    return async (req,res,next) => {
        const {name} = req.query;
        try {
           
            const students = await Student.updateMany(
                {classroom : name},
                {isInQuarantine: true}
            );
            
            return students ? next() : res.status(422).json('Cannot update the students')
        } catch (err) {
            res.json(err.message)   
        }
    }
};
module.exports = updateStudents;