const {Router} = require('express');
const router = Router();

const {addTestInfo, addFormatedDates} = require('../../middleware/positiveCase/positiveCase');
const positiveCaseController = require('../../controllers/positiveCase/positiveCase');

router.post(
    '/createOne',
    addTestInfo(),
    addFormatedDates(),
    positiveCaseController.createOne
);

module.exports = router