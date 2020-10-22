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

