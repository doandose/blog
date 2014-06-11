Blog.PostsIndexRoute = Ember.Route.extend({
	model: function(){
    	return this.store.findAll('post')
  	}
})

Blog.PostsShowRoute = Ember.Route.extend({
  	model: function(params){
    	return this.store.find('post', params.slug)
  	},

  	serialize: function(model, params){
  		return { slug: model.get('slug') }
  	}
})