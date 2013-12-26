window.MarketApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new MarketApp.Routers.MainRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  MarketApp.initialize();
});
