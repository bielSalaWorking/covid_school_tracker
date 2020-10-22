const CovidPositive = require('../../models/covid_positive/covid_positive');

exports.createOne = async (req, res) => {
    const covidPositiveData = req.body;
    try {
        const covidPositive = new CovidPositive(covidTestData);
        await covidPositive.save();
        res.status(201).json(covidPositive);
    } catch (err) {
        res.status(422).json(err.message);
    }
}

exports.findOneById = async (req,res) => {
    const {id} = req.query;
    try{
        const covidTest = await CovidTest.findById(id);
        if(covidTest) return res.status(200).json(covidTest);

        res.status(404).json('CovidTest not found')
        
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
    
    const covidTestData = req.body;

    try{
        const covidTest = await CovidTest.findByIdAndUpdate(
            {_id : ID},
            covidTestData,
           {returnOriginal: false},
        );
        if(covidTest) return res.status(201).json(covidTestData);
        res.status().json('Cannot update CovidTest');
    }catch(err){
        res.status(422).json(err.message);
    }
}
exports.deleteOne = async (req,res) => {
    const {id} = req.query;
    try {
        const covidTest = await CovidTest.findByIdAndRemove(id);
        if(covidTest) return res.status(201).json('remove CovidTest');
        res.status(422).json('Cannot remove CovidTest')
    } catch (error) {
        
    }
}