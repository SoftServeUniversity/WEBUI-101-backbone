describe('Content view', function() {
  it('should be defined', function() {
    expect(MarketApp.Views.Content).toBeDefined();
  });

  beforeEach(function() {
    v = new MarketApp.Views.DefaultMain();
    contentView = new MarketApp.Views.Content();
  });

  describe('swapMain', function() {
    it('sets new current main view', function() {
      contentView.swapMain(v);
      expect(contentView.currentMainView).toEqual(v);
    });
  });

  describe('swapSide', function() {
    it('sets new current side view', function() {
      contentView.swapSide(v);
      expect(contentView.currentSideView).toEqual(v);
    });
  });
});
