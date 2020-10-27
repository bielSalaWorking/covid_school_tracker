const PositiveCase = require('../../models/positiveCase/positiveCase');

exports.createOne = async (req, res) => {
    const covidPositiveData = req.body;
    try {
        const positiveCase = new PositiveCase(covidPositiveData);
        await positiveCase.save();
        res.status(201).json(positiveCase);
    } catch (err) {
        res.status(422).json(err.message);
    }
}

exports.findOneById = async (req,res) => {
    const {id} = req.query;
    try{
        const posiviteCase = await PositiveCase.findById(id);
        if(posiviteCase) return res.status(200).json(posiviteCase);

        res.status(404).json('posiviteCase not found')
        
    }catch(err){
        res.status(422).json(err.message)
    }
}
//When positiveCase is updated to false need to make some actions
exports.updateOne = async (req,res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(422).json({errors: errors.array()});
    // }

    const {id} = req.query;
    const posiviteCaseData = req.body;

    try{
        const positiveCase = await PositiveCase.findByIdAndUpdate(
            {_id : id},
            posiviteCaseData,
           {returnOriginal: false},
        );
        if(positiveCase) return res.status(201).json(positiveCase);
        res.status().json('Cannot update positiveCase');
    }catch(err){
        res.status(422).json(err.message);
    }
}
exports.deleteOne = async (req,res) => {
    const {id} = req.query;
    try {
        const positiveCase = await PositiveCase.findByIdAndRemove(id);
        if(positiveCase) return res.status(201).json('positiveCase remove');
        res.status(422).json('Cannot remove positiveCase')
    } catch (error) {
        res.status(422).json(err.message);

    }
}