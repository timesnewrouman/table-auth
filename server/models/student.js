const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('student', studentSchema);