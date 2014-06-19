Blog.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            categories: this.store.findAll('category'),
            posts: this.store.findAll('post')
        });
    },

    renderTemplate: function(controller, model) {
        this._super();

        this.render('categories.index', {
            into: 'application',
            outlet: 'menu'
        })
    }
})