const {Router} = require('express');
const router = Router();

const addFormatedDates = require('../../middleware/covidPositives/covidPositives');
const covidPositivesController = require('../../controllers/positive_case/positive_case');
router.post(
    '/createOne',
    addFormatedDates(),
    covidPositivesController.createOne
);