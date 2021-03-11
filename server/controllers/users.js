const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((data) => res.send(data))
    .catch(next);
};