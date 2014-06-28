Blog.PostsIndexController = Ember.ArrayController.extend({
    sortProperties: ['publishedAt'],
    sortAscending: false,

    postsPublisheds: function() {
        return this.filter(function(post) {
            return !Ember.isBlank(post.get('publishedAt'));
        });
    }.property('@each.publishedAt').cacheable(),
});

Blog.PostsShowController = Ember.ObjectController.extend(Blog.DatableMixin, Blog.CommentableMixin, {
    format: "LL",
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
    }.property('commentsCount')
});