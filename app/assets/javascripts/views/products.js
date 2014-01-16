MarketApp.Views.Products = Backbone.View.extend({

  template: HandlebarsTemplates['products'],

  initialize: function() {
    this.listenTo( MarketApp.Vent, "category:show", this.renderFiltersCategory);
    this.listenTo( MarketApp.Vent, "filter:price", this.renderFilterPrice);
    this.listenTo(this.collection, "reset", this.render);
    return this.collection.fetch({
      reset: true
    });
  },

  render: function() {

    this.$el.html(this.template());
    this.collection.forEach(this.renderProduct, this);
    return this;
  },

  renderFiltersCategory: function(values) {
    this.$el.html(this.template());
    for (var i=0;i<values.length;i++)
    {
      this.collection.where({
      category_id: parseInt(values[i])
      }).forEach(this.renderProduct, this);
    }
    return this;
  },

  renderFilterPrice: function() {
    var low_price = $('input.low_price').val();
    var high_price = $('input.high_price').val();
    if (high_price==0){
      high_price=Number.MAX_VALUE;
    }
    this.$el.html(this.template());
    this.collection.filter(function(model) {
      return  model.get("category_id") >= low_price &&  model.get("category_id") <= high_price;
      }).forEach(this.renderProduct, this);
    return this;
  },

  renderProduct: function(model) {
    var v;
    v = new MarketApp.Views.Product({
      model: model
    });
    return this.$('ul').append(v.render().el);
  }
});
