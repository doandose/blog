Blog.CategoriesShowController = Ember.ObjectController.extend(Blog.PaginatableMixin, {
	page: 1,
    perPage: 2,
    arrangedContent: function(){
	    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
	      sortProperties: ['publishedAt'],
	      sortAscending: false,
	      content: this.get('content.posts')
	    });
    }.property('content.posts')
})