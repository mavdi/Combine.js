let chai = require('chai');
let Promise = require('bluebird').Promise;
require('should');

if (!global.Promise) {
    chai.request.addPromises(Promise);
}

before(function() {
    let Combine = require('../lib/index');
    this.app = new Combine()
    .then((app) => {
          this.app = app;
          this.app.adapter.dropDatabase();
      });
});