Blog.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('post')
	}
})

Blog.PostsShowRoute = Blog.PostsRoute.extend({
	model: function(params){
    console.log(params.slug)
    window.foo = this
    window.slug = params.slug
		// return this.store.find('post', params.slug)
	},

	serialize: function(model, params){
		return { slug: model.get('slug') }
	}
})