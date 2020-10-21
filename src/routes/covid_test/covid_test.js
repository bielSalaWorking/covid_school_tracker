const {Router} = require('express');
const router = Router();

const updateClassroom = require('../../middleware/covid_cases/updateClassroom');
const updateStudents = require('../../middleware/covid_cases/updateStudents');
const updateTest = require('../../middleware/covid_cases/updateTest');

const CovidTestController = require('../../controllers/covid_test/covid_test');

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