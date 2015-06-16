let mongoose = require('mongoose');
let Promise = require('bluebird');

export default class Adapter {
  constructor(options) {
    this.options = options;
    this.mongoose = mongoose;
    Promise.promisifyAll(mongoose);
    mongoose.connect(this.options.db.url);

    return new Promise((resolve, reject) => {
      mongoose.connection.on('connected', () => {
        console.log('connected');
        resolve(this);
      });
    });
  }

  dropDatabase() {

  }
}