const express = require('express');
const { allLogins, loginAuthenticate, employeesLogin } = require('../../controllers/loginControl');
const router = express.Router();

router.get('/getAllLogins', allLogins);
router.get('/getAllEmployees', employeesLogin);
router.post('/authenticateLogin', loginAuthenticate);

module.exports = router;