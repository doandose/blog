Blog.CategoriesShowController = Ember.ObjectController.extend(Blog.PaginatableMixin, {
	page: 1,
    perPage: 10,
    arrangedContent: function(){
    	var posts = this.get('content.posts')

    	posts = posts.filter(function(post) {
        	return !Ember.isBlank(post.get('publishedAt'));
        });

	    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
	      sortProperties: ['publishedAt'],
	      sortAscending: false,
	      content: posts
	    });
    }.property('content.posts')
})