Blog.PostRoute = Ember.Route.extend({
    model: function() {
        console.log(this.store)
        return this.store.findAll('post');
    }
})