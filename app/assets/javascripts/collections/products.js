MarketApp.Collections.Products = Backbone.Collection.extend({
  model: MarketApp.Models.Product,
  url: '/products'
});
