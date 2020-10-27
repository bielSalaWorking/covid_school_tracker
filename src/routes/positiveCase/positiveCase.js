const {Router} = require('express');
const router = Router();

const addFormatedDates = require('../../middleware/positiveCase/positiveCase');
const positiveCaseController = require('../../controllers/positiveCase/positiveCase');

router.post(
    '/createOne',
    addFormatedDates(),
    positiveCaseController.createOne
);

module.exports = router