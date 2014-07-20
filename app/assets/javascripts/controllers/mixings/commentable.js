Blog.CommentableMixin = Ember.Mixin.create(Ember.Validations.Mixin, {
    actions: {
        submit: function() {
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