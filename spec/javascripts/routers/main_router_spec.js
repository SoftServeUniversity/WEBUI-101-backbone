describe('Application MainRouter', function() {
    beforeEach(function() {
      this.router = new MarketApp.Routers.MainRouter;
      this.routeSpy = sinon.spy();
      try {
        Backbone.history.start({silent:true, pushState:true});
      } catch(e) {}
      this.router.navigate("elsewhere");
    });

  it("fires the index route with a blank hash", function() {
    this.router.bind("route:index", this.routeSpy);
    this.router.navigate("", true);
    expect(this.routeSpy.callCount).toBe(1);
  });
});
