MarketApp.Routers.MainRouter = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.headerView = new MarketApp.Views.Header();
    this.contentView = new MarketApp.Views.Content();
    this.footerView = new MarketApp.Views.Footer();
  },

  index: function() {
    this.layoutViews();
    this.contentView.swapSide(new MarketApp.Views.DefaultAside());
    this.contentView.swapMain(new MarketApp.Views.DefaultMain());
  },

  layoutViews: function() {
    $('#header').html(this.headerView.render().el);
    $('#content').html(this.contentView.render().el);
    $('#footer').html(this.footerView.render().el);
  }

});