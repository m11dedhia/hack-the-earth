const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    unique: [true, 'Email already taken'],
    required: [true, 'Please add an email id'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add a valid email'
    ]
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please a date of birth']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: 8
  },
  typeOfAccount: {
    type: String,
    required: [true, 'Please add a type of account'],
    enum: ['TEACHER', 'STUDENT'],
    default: 'STUDENT'
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('User', UserSchema);