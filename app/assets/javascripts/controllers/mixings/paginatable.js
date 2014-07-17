Blog.PaginatableMixin = Ember.Mixin.create({
	pages: function(){
        result = parseInt(this.get('content.length') / this.get('perPage'));
        if (this.get('content.length') % this.get('perPage') > 0){
            ++result    
        }
        return result;
    }.property('content.[]', 'perPage'),

    paginatedContent: function(){
        page = this.get('page');
        perPage = this.get('perPage');
        start = (page - 1) * perPage;
        end = page * perPage;
        return this.get('arrangedContent').slice(start, end)
    }.property('arrangedContent.[]', 'page', 'perPage')
})