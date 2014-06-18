Blog.Category = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  posts: DS.hasMany('post')
})