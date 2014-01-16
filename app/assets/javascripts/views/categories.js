MarketApp.Views.Categories = Backbone.View.extend({

  template: HandlebarsTemplates['categories'],

  initialize: function() {
    this.listenTo(this.collection, "reset", this.render);
    return this.collection.fetch({
      reset: true
    });
  },

  events: {

    "click button": "renderFilterPrice"
  },

  renderFilterPrice: function() {
    var low_price = $('input.low_price').val();
    var high_price = $('input.high_price').val();

    return MarketApp.Vent.trigger("filter:price");
  },

  render: function() {

    this.$el.html(this.template());
    this.collection.forEach(this.renderCategory, this);

    return this;
  },



  renderCategory: function(model) {

    var v;
    v = new MarketApp.Views.Category({
      model: model
    });
    return this.$('ul').append(v.render().el);
  }
});
