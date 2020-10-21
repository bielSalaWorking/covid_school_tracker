const Classroom = require('../../models/classroom/classroom');

exports.createOne = async (req, res) => {
    const classroomData = req.body;
    try {
        const classroom = new Classroom(classroomData);
        await classroom.save();
        
        res.status(201).json(classroom);
    } catch (err) {
        res.status(422).json(err.message);
    }
}