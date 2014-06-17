Blog.PostsRoute = Ember.Route.extend({
    model: function() {
        window.index = this.store
        return this.store.findAll('post')
    }
})

Blog.PostsShowRoute = Ember.Route.extend({
    model: function(params) {
        window.show = this.modelFor('posts')
        return this.modelFor('posts').findBy('slug', params.slug)
    }
})