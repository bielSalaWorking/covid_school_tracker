const {Router} = require('express');
const router = Router();
const classRoomController = require('../../controllers/classroom/classroom');

router.post(
    '/createOne',
    classRoomController.createOne
)
module.exports = router;