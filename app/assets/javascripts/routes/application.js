Blog.ApplicationRoute = Ember.Route.extend(Blog.LoadableMixin, {
    model: function() {
        return Ember.RSVP.hash({
            posts: this.store.findAll('post'),
            categories: this.store.findAll('category'),
            authors: this.store.findAll('author')
        });
    },

    renderTemplate: function(controller, model) {
        this._super();

        this.render('menu', {
            into: 'application',
            outlet: 'menu'
        });

        this.render('footer', {
            into: 'application',
            outlet: 'footer'
        })
    }
})