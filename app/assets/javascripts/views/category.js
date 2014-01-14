MarketApp.Views.Category = Backbone.View.extend({

  template: HandlebarsTemplates['category'],

  events: {
    "click input.cat": "renderFilterCategory"
  },


  renderFilterCategory: function(e) {
    var values = $('input:checkbox:checked.cat').map(function () {
    return this.value;
    }).get();
    return MarketApp.Vent.trigger("category:show", values);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }



});
