Blog.Comment = DS.Model.extend({
  published_at: DS.attr('string'),
  name: DS.attr('string'),
  body: DS.attr('string'),
  email: DS.attr('string'),
  post: DS.belongsTo('post'),

  avatar: function() {
    var hash = this.get('email')
    return "http://www.gravatar.com/avatar/" + hash;
  }.property('email')
})