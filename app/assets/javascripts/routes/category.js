Blog.PostsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.all('category')
    }
})

Blog.CategoriesShowRoute = Ember.Route.extend({
    model: function(params) {
        window.foo = this.store.all('category').findBy('slug', params.slug)
        return this.store.all('category').findBy('slug', params.slug)
    }
})