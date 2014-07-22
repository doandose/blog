Blog.CategoriesShowRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.all('category').findBy('slug', params.slug)
    }
})