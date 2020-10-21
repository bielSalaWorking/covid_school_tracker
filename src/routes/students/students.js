const {Router} = require('express');
const router = Router();
const studentController = require('../../controllers/students/students');

router.post(
    '/createOne',
    studentController.validator(),
    studentController.createOne
);
router.get(
    '/findOne',
    studentController.findOneById
);
router.patch(
    '/updateOne',
    studentController.validator(),
    studentController.updateOne
);
router.delete(
    '/deleteOne',
    studentController.deleteOne
)
module.exports = router;