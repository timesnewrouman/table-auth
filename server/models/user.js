const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  points_earned: {
    type: Number,
    required: true,
  },
  points_spent: {
    type: Number,
    required: true,
  },
  registration_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);