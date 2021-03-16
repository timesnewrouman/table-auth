const User = require('../models/user');

module.exports.login = (req, res, next) => {
  const { login, password } = req.body;
  return User.findOne({ login, password })
    .then((data) => res.send(data))
    .catch(next);
};