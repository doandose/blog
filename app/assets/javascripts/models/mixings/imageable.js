Blog.ImageableMixin = Ember.Mixin.create({
    avatar: function() {
        var hash = md5(this.get('email'));
        return "http://www.gravatar.com/avatar/" + hash;
    }.property('email')
})