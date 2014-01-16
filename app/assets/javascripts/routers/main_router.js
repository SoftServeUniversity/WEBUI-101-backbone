MarketApp.Routers.MainRouter = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    this.headerView = new MarketApp.Views.Header();
    this.contentView = new MarketApp.Views.Content();
    this.footerView = new MarketApp.Views.Footer();
  },

  layoutViews: function() {
    $('#header').html(this.headerView.render().el);
    $('#content').html(this.contentView.render().el);
    $('#footer').html(this.footerView.render().el);
  },

  index: function() {
    this.layoutViews();
    this.contentView.swapSide(new MarketApp.Views.Categories({ collection: new MarketApp.Collections.Categories }));
    this.contentView.swapMain(new MarketApp.Views.Products({ collection: new MarketApp.Collections.Products }));
  }
});
