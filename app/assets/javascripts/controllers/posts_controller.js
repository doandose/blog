Blog.PostsIndexController = Ember.ArrayController.extend({
    sortProperties: ['publishedAt'],
    sortAscending: false
});

Blog.PostsShowController = Ember.ObjectController.extend({
    format: "LL",
    commentsCount: Ember.computed.alias('comments.length'),

    hasComments: function() {
      return this.get('commentsCount') > 0;
    }.property('commentsCount'),

    formattedDate: function() {
        moment.lang('pt-br');

        var date = this.get('publishedAt'),
            format = this.get('format');

        return moment(date).format(format);
    }.property('publishedAt', 'format')
});