const Student = require('../models/student');

module.exports.getStudents = (req, res, next) => {
  Student.find()
    .then((data) => res.send(data))
    .catch(next);
};