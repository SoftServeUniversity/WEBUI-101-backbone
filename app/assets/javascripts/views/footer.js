MarketApp.Views.Footer = Backbone.View.extend({

  template: HandlebarsTemplates['footer'],

  initialize: function() {},

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
