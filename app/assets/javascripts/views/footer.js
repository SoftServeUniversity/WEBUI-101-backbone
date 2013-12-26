MarketApp.Views.Footer = Backbone.View.extend({

  template: HandlebarsTemplates['footer'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
