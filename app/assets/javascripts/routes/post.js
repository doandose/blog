Blog.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('post')
	}
})

Blog.PostsShowRoute = Ember.Route.extend({
	model: function(params) {
    return this.modelFor('posts').findBy('slug', params.slug)
	}
})

Blog.PostSerializer = DS.RESTSerializer.extend({
  keyForAttribute: function(attr) {
    console.error(attr)
  }
});