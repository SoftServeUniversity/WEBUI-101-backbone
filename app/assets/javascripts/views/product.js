MarketApp.Views.Product = Backbone.View.extend({

  template: HandlebarsTemplates['product'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }



});
