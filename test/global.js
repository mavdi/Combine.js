let chai = require('chai');
let Promise = require('bluebird').Promise;
require('should');

if (!global.Promise) {
    chai.request.addPromises(Promise);
}

before(function() {
    let Combine = require('../lib/index');
    return this.app = new Combine({
      server : {
        port : 3000
      },
      db : {
        url : 'mongodb://localhost/combine'
      }
    })
    .then((app) => {
          this.app = app;
          this.app.adapter.dropDatabase();
      });
});