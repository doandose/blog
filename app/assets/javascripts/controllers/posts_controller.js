Blog.PostsIndexController = Ember.ArrayController.extend({
    sortProperties: ['publishedAt'],
    sortAscending: false
});

Blog.PostsShowController = Ember.ObjectController.extend({
    format: "LL",
    message: '',
    commentsCount: Ember.computed.alias('comments.length'),

    commentsPublisheds: Ember.computed.map('comments', function(comment) {
        var publishedAt = comment.get('publishedAt');
        if (!Ember.isBlank(publishedAt)) { return comment }
    }),

    hasComments: function() {
      return this.get('commentsCount') > 0;
    }.property('commentsCount'),

    formattedDate: function() {
        moment.lang('pt-br');

        var date = this.get('publishedAt'),
            format = this.get('format');

        return moment(date).format(format);
    }.property('publishedAt', 'format'),

    actions: {
        createComment: function(){
            var comment = this.store.createRecord('comment', {
                name: this.get('name'),
                email: this.get('email'),
                body: this.get('text'),
                post: this.get('model')
            });

            comment.save()
        }
    }
});