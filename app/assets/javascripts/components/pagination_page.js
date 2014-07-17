Blog.PaginationPageComponent = Ember.Component.extend({
	isCurrent: function(){
		this.get('currentPage') == this.get('page')
	}.property('currentPage', 'page'),
	
	tagName: 'li',
	classNameBinding: 'isCurrent:disabled',
	actions: {
		pageClicked: function(){
			this.get('parentView').send('goToPage', this.get('page'))
		}
	}
})