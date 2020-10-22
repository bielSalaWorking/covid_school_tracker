const Classroom = require('../../models/classroom/classroom');

const updateClassroom = () => {
    return async (req,res,next) => {
        const {id} = req.query;        
        try {
            const updatedClassroom = await Classroom.findByIdAndUpdate(
                id,
                {isInQuarantine : true}
            );
            return updateClassroom 
            ? next() 
            : res.status(422).json('Cannot update the classroom');
        } catch (err) {
            res.status(422).json(err.message)
        }
    }
}
module.exports = updateClassroom;
