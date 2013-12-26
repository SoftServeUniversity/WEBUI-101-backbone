MarketApp.Views.Header = Backbone.View.extend({

  template: HandlebarsTemplates['header'],

  initialize: function() {},

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
