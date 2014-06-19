Blog.PostsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.all('post')
    }
})

Blog.PostsShowRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.all('post').findBy('slug', params.slug)
    },

    serialize: function(model, params) {
        return {
            category_slug: model.get('category').get('slug'),
            slug: model.get('slug')
        }
    }
})