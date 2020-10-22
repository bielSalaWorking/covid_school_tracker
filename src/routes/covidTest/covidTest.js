const {Router} = require('express');
const router = Router();

const updateClassroom = require('../../middleware/covidTest/updateClassroom');
const updateStudents = require('../../middleware/covidTest/updateStudents');
const updateTest = require('../../middleware/covidTest/updateTest');

const CovidTestController = require('../../controllers/covidTest/covidTest');

router.post(
    '/createOne',
    updateClassroom(),
    updateStudents(),
    CovidTestController.createOne
)
router.patch(
    '/updateOne',
    updateTest(),
    CovidTestController.updateOne
)

module.exports = router;