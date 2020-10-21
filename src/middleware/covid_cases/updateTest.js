const Classroom = require('../../models/classroom/classroom');
const Student = require('../../models/student/student');

const updateTest = () => {
    return async (req,res,next) => {
        const {classroom} = req.query;     
         
        const {student_id,status} = req.body
        try {
            switch(status) {
                case('Positive'): 
                    await testIsPositive(classroom, student_id, next);
                    break;
                case('Negative'):               
                    await testIsNegative(classroom, next);
                    break;
                default:
                    return res.status(422).json('error');
                    break;
            }
        } catch (err) {
            res.json(err)
        }
    }
}
const testIsNegative = async (classroom, studentId, next) => {
    try {
        const students =  Student.updateMany(
            {classroom : classroom},
            {isInQuarantine: false}
        );
         const classrooms = Classroom.findOneAndUpdate(
             {name : classroom},
             {isInQuarantine: false}
         );
        
        return await Promise.allSettled([classrooms,students]) 
        ? next() 
        : res.status(422).json('Cannot update')
        
    } catch (err) {
        res.status(422).json(err.message)
    }
}
const testIsPositive = async (classroom, student_id, next) => {
    try {
        const student =  Student.findOneAndUpdate(
            {_id : student_id},
            {isPositive : true},
        );
        const students = Student.updateMany(
            {classroom : classroom},
            {isInQuarantine : true}
        );
        const classrooms = Classroom.findOneAndUpdate(
            {name: classroom},
            {isInQuarantine : true}
        );
         return await Promise.allSettled([student,students,classrooms])
         ? next()
         : res.status(422).json('Cannot update')
 
    } catch (err) {
        res.status(422).json(err.message)

    }
} 
module.exports = updateTest;
