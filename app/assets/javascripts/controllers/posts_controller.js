Blog.PostsIndexController = Ember.ArrayController.extend(Blog.PaginatableMixin, {
    page: 1,
    perPage: 10,

    arrangedContent: function(){
        var posts = this.get('content')

        posts = posts.filter(function(post) {
            return !Ember.isBlank(post.get('publishedAt'));
        });

        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
          sortProperties: ['publishedAt'],
          sortAscending: false,
          content: posts
        });
    }.property('content')
});

Blog.PostsShowController = Ember.ObjectController.extend(Blog.CommentableMixin, {
    commentsCount: Ember.computed.alias('commentsPublisheds.length'),
    sortProperties: ['publishedAt:desc'],
    commentPublishedSorteds: Ember.computed.sort('commentsPublisheds', 'sortProperties').property('commentsPublisheds.@each.publishedAt'),

    commentsPublisheds: function() {
        return this.get('comments').filter(function(comment) {
            return !Ember.isBlank(comment.get('publishedAt'));
        });
    }.property('comments.@each.publishedAt').cacheable(),

    hasComments: function() {
        return this.get('commentsCount') > 0;
    }.property('commentsCount'),

    hasMessage: function() {
        return !Ember.isBlank(this.get('message'));
    }.property('message'),

    tagsFormatted: function() {
        return this.get('tags').map(function(tag) {
            var formatted = '#' + tag.get('name');
            return tag.set('name', formatted);
        });
    }.property('tags.@each.name').cacheable(),
});