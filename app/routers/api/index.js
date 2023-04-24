const express = require('express');
const cadexController = require('../../controllers/api/cadexController');
const cadexErrorController = require('../../controllers/api/error');

const router = express.Router();

router.get('/cadex', cadexController.getCadex);
router.post('/cadex', cadexController.updateCadex);

router.use(cadexErrorController.error404);

module.exports = router;
