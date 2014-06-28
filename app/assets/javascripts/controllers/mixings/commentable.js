Blog.CommentableMixin = Ember.Mixin.create(Ember.Validations.Mixin, {
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
        text: {
            presence: true
        }
    }
})