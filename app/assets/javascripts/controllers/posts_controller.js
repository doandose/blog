Blog.PostsIndexController = Ember.ArrayController.extend({
    sortProperties: ['publishedAt'],
    sortAscending: false
});

Blog.PostsShowController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
    format: "LL",
    commentsCount: Ember.computed.alias('commentsPublisheds.length'),
    sortProperties: ['publishedAt:desc'],
    commentPublishedSorteds: Ember.computed.sort('model.comments', 'sortProperties'),

    commentsPublisheds: function(comment) {
        return this.get('comments').filter(function(comment) {
            return !Ember.isBlank(comment.get('publishedAt'));
        });
    }.property('comments.@each.publishedAt').cacheable(),

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
        createComment: function() {
            var valid = function() {
                var recordComment = {
                    name: this.get('name'),
                    email: this.get('email'),
                    body: this.get('text'),
                    post: this.get('model')
                };

                var comment = this.store.createRecord('comment', recordComment);

                comment.save().then(function(comment) {
                    this.set('name', '')
                    this.set('email', '')
                    this.set('text', '')
                    this.set('message', t('flashs.saveComment'))
                }.bind(this));
            }.bind(this)

            var invalid = function() {
                console.log('invalid', this.get('errors'))
            }.bind(this)

            this.validate().then(valid, invalid)
        }
    },

    validations: {
        name: {
            presence: true
        },
        email: {
            presence: true,
            format: /.+@.+\..{2,4}/
        },
        body: {
            presence: true
        }
    }
});