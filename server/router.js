const router = require('express').Router();
const { getStudents } = require('./controllers/students');
const { login } = require('./controllers/users');

router.get('/students', getStudents);
router.post('/users', login);

module.exports = router;