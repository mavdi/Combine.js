let Hapi = require('hapi');
let Promise = require('bluebird').Promise;
let Adapter = require('./adapter');

export default class Combine {
  constructor(options) {
    this.options = options || {};
    this.adapter = new Adapter(options);
    this.createServer();

    return new Promise((resolve, reject) => {
      resolve(this);
    });
  }

  createServer() {
    this.server = new Hapi.Server();
    this.server.connection({port : this.options.port});
  }
}

