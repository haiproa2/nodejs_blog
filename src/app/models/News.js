const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema({
  name: {type: String, default: '', minLength: 1, maxLength: 255},
  description: {type: String, default: '', maxLength: 255},
  image: {type: String, default: ''},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('News', News);