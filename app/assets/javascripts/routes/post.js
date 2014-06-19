Blog.PostsRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            categories: this.store.findAll('category'),
            posts: this.store.findAll('post')
        });
    },

    renderTemplate: function(controller, model) {
      this.render('categories.index', { outlet: 'menu' })
    }
})

Blog.PostsShowRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('posts').findBy('slug', params.slug)
    },

    serialize: function(model, params) {
        return {
            category_slug: model.get('category').get('slug'),
            slug: model.get('slug')
        }
    }
})