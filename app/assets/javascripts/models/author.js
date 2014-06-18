Blog.Author = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  posts: DS.hasMany('post')
})