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

exports.findOneById = async (req,res) => {
    const {id} = req.query;
    try{
        const classroom = await Classroom.findById(id);
        if(classroom) return res.status(200).json(classroom);

        res.status(404).json('Classroom not found')
        
    }catch(err){
        res.status(422).json(err.message)
    }
}
exports.updateOne = async (req,res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }
    const {ID} = req.query;
    
    const classroomData = req.body;

    try{
        const classroom = await Classroom.findByIdAndUpdate(
            {_id : ID},
            classroomData,
           {returnOriginal: false},
        );
        if(classroom) return res.status(201).json(classroom);
        res.status().json('Cannot update classroom');
    }catch(err){
        res.status(422).json(err.message);
    }
}
exports.deleteOne = async (req,res) => {
    const {id} = req.query;
    try {
        const classroom = await Classroom.findByIdAndRemove(id);
        if(classroom) return res.status(201).json('remove classroom');
        res.status(422).json('Cannot remove CovidTest')
    } catch (error) {
        
    }
}