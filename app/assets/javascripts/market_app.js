window.MarketApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Vent: _.clone(Backbone.Events),
  initialize: function() {
    new MarketApp.Routers.MainRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  MarketApp.initialize();
});
