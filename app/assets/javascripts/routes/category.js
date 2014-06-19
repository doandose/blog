Blog.CategoriesRoute = Ember.Route.extend({
    model: function() {
      return this.store.findAll('category')
    }
})