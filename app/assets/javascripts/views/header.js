MarketApp.Views.Header = Backbone.View.extend({

  template: HandlebarsTemplates['header'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
