Blog.PostsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.all('category')
    }
})

Blog.CategoriesShowRoute = Ember.Route.extend({
    model: function() {
        return this.store.all('category')
    }
})