Blog.PaginationLinksComponent = Ember.Component.extend({
	hasPrevious: function(){
		this.get('page') > 1
	}.property('page'),

	hasNext: function(){
		this.get('page') + 1 < this.get('pages')
	}.property('page', 'pages'),

	showPagination: Ember.computed.gt('pages', 1),

	lastPage: Ember.computed.alias('pages'),

	visiblePages: (function() {
		var finish, limit, page, pages, start, _i, _ref, _results;
		pages = this.get('pages');
		page = this.get('page');
		limit = 5;
		if (pages < 5) {
			limit = pages;
		}
		finish = function(start, limit) {
			return start + limit - 1;
		};
		start = page - parseInt(limit / 2);
		if (finish(start, limit) > pages) {
			start = pages - limit + 1;
		}
		if (start < 1) {
			start = 1;
		}
		return (function() {
			_results = [];
			for (var _i = start, _ref = finish(start, limit); start <= _ref ? _i <= _ref : _i >= _ref; start <= _ref ? _i++ : _i--){ _results.push(_i); }
			return _results;
		}).apply(this);
	}).property('page', 'pages'),

	showBeforeEllipsis: function() {
		return this.get('visiblePages.firstObject') > 3;
	}.property('visiblePages.[]'),

	showAfterEllipsis: function() {
		return Math.abs(this.get('lastPage') - this.get('visiblePages.lastObject')) > 2;
	}.property('visiblePages.[]', 'lastPage'),

	actions: {
		goToNextPage: function() {
			console.log(this.get('hasNext'))
			if (this.get('hasNext')) {
				return this.incrementProperty('controller.page');
			}
		},
		goToPreviousPage: function() {
			if (this.get('hasPrevious')) {
				return this.decrementProperty('controller.page');
			}
		},
		goToPage: function(pageNumber) {
			if (pageNumber >= 1 && pageNumber <= this.get('lastPage')) {
				return this.set('controller.page', pageNumber);
			}
		}
	}
})