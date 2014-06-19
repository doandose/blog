Blog.Author = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  posts: DS.hasMany('post'),

  avatar: function() {
    var hash = this.get('email')
    return "http://www.gravatar.com/avatar/" + hash;
  }.property('email')
})