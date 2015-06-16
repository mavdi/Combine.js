describe('Application bootstrap', () => {

  it('Creates the App', function() {
      this.app.adapter.should.be.ok;
  });

  it('Creates a connection to MongoDB with the app', function() {
      this.app.adapter.mongoose.should.be.ok;
      this.app.adapter.mongoose.connection.base.connections.length.should.be.greaterThan(0);
  });

});