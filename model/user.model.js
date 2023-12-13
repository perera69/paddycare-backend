const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: false,
    minlength: 10,
    maxlength: 10,
  },
  
  address: {
    type: String,
  },
  
  username: {
    type: String,
    required: false,
    match: /^[a-zA-Z0-9_\s]+$/, // Allows alphanumeric characters, underscores, and spaces
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
