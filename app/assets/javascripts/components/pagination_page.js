Blog.PaginationPageComponent = Ember.Component.extend({
	tagName: 'li',
	classNameBinding: 'isCurrent:disabled',
	isCurrent: function(){
		this.get('currentPage') == this.get('page')
	}.property('currentPage', 'page'),
	actions: {
		pageClicked: function(){
			this.get('parentView').send('goToPage', this.get('page'))
		}
	}
})