const Student = require('../../models/student/student');
const {body, validationResult} = require('express-validator')

exports.createOne = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    try {
        const studentData = req.body;
        const student = new Student(studentData);
        await student.save();

        res.status(201).json(student);
    } catch (err) {
        res.status(422).json(err.message);
    }
}
exports.findOneById = async (req,res) => {
    const {id} = req.query;
    try{
        const student = await Student.findById(id);
        if(student) return res.status(200).json(student);

        res.status(404).json('Student not found')
        
    }catch(err){
        res.status(422).json(err.message)
    }
}
exports.updateOne = async (req,res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }

    const {id} = req.query;
    const studentData = req.body;

    try{
        const student = await Student.findByIdAndUpdate(
            {_id : id},
            studentData,
           {returnOriginal: false},
        );
        if(student) return res.status(201).json(student);
        res.status().json('Cannot update student');
    }catch(err){
        res.status(422).json(err.message);
    }
}
exports.deleteOne = async (req,res) => {
    const {id} = req.query;
    try {
        const student = await Student.findByIdAndRemove(id);
        if(student) return res.status(201).json('Student remove');
        res.status(422).json('Cannot remove student')
    } catch (error) {
        
    }
}
exports.validator = () => {
    return [
        body('fullname')
            .not().isEmpty()
            .trim()
            .custom(async value => {
                const student = await Student.findOne(
                    {fullname: value}
                );
                 return student ? Promise.reject('This student already exists') : true;
             
        }),
        body('address.direction')
            .not().isEmpty()
            .trim(),
        body('contact_info')
            .not().isEmpty()
            .trim(),
        //TODO: create models to see if this student is assing to this classroom and school
    ]
}

