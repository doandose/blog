Blog.PostsRoute = Ember.Route.extend();

Blog.PostsIndexRoute = Blog.PostsRoute.extend({
    model: function() {
        return this.store.findAll('post');
    }
});

Blog.PostsShowRoute = Blog.PostsRoute.extend({
    model: function(params) {
        console.log('-----------------', params, this.store.findBy('slug', params.slug))
        return this.store.findBy('slug', params.slug);
    }
});