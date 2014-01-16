MarketApp.Views.Content = Backbone.View.extend({

  template: HandlebarsTemplates['content'],

  className: 'content-view',



  render: function() {
    this.$el.html(this.template());
    /* this.renderCategoriesView();*/
    return this;
  },

  renderCategoriesView: function() {
    var v;
    console.log("df");
    v = new MarketApp.Views.Categories({
      collection: new MarketApp.Collections.Categories
    });
    return this.$('#content1').html(v.render().el);
  },

  swapMain: function(v) {
    this.changeCurrentMainView(v);
    this.$('#main-area').html(this.currentMainView.render().el);
  },

  swapSide: function(v) {
    this.changeCurrentSideView(v)
    this.$('#sidebar-area').html(this.currentSideView.render().el)
  },

  changeCurrentMainView: function(v) {
    this.currentMainView = v;
  },

  changeCurrentSideView: function(v) {
    this.currentSideView = v;
  }
});
