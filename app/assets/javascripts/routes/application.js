Blog.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            posts: this.store.findAll('post'),
            categories: this.store.findAll('category'),
            authors: this.store.findAll('author')
        });
    },

    renderTemplate: function(controller, model, c) {
        this._super();

        if (location.href.match(/admin/)) {
            this.render('admin.application')

            this.render('admin.menu', {
                into: 'admin.application',
                outlet: 'menu'
            });
        } else {
            this.render('menu', {
                into: 'application',
                outlet: 'menu'
            });

            this.render('footer', {
                into: 'application',
                outlet: 'footer'
            })
        }
    }
})