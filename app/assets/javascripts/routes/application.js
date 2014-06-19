Blog.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            posts: this.store.findAll('post'),
            categories: this.store.findAll('category')
        });
    },

    renderTemplate: function(controller, model) {
        this._super();

        this.render('menu', {
            into: 'application',
            outlet: 'menu'
        })
    }
})