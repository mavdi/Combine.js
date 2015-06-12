let mongoose = require('mongoose');

export default class Adapter {
  constructor(options) {
    mongoose.connect('mongodb://localhost/combine');
    console.log(mongoose)
  }

  dropDatabase() {

  }
}