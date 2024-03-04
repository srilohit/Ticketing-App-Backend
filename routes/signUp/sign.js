const express = require('express');
const { createUserAccount } = require('../../controllers/signController');
const router = express.Router();

router.post('/createAccount', createUserAccount);

module.exports = router;