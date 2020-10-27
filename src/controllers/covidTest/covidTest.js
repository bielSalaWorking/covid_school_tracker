const {CovidTest} = require('../../models/covidTest/covidTest');

exports.createOne = async (req, res) => {
    const covidTestData = req.body;
    try {
        const covidTest = new CovidTest(covidTestData);
        await covidTest.save();
        
        res.status(201).json(covidTest);
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
// When updating a existing case when its positive student and classroom true
/*
 1. When a student makes a test we:
    -> Create a covid test
    -> Search the classroom of the student and update the classroom.isInQUARANTINE=true
    -> Update students in that class to be in quarantine

 2. If the result is negative
    -> update the student which had done the test to covid_test.status = negative
    -> update the classroom.isInQuarantine = false.
    -> Update the rest of the students to student.isInQuarantine = false
    -> Send emails to fathers

 3. If the result is positive
    
    -> update the student which had done the test to covid_test.status = positive
    -> Update student with covid student.ispositive = true

    Create a new covid_postive
        --> due_day need to be calculated
        --> test_info = covid_test

    -> update the classroo m.isInQuarantine = true.
    -> Update all the students in that classroom to students.isInQuarantine = ture
    -> Send emails to fathers
    
    13.2 When due_Date is over:
        -> update student with covid to student.isPositive = false
        -> update the classroom.isInQuarantine = false.
        -> Update students.isInQuarantine = false
        -> Send emails to fathers

 
 
 */