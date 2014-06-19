Blog.Comment = DS.Model.extend({
  published_at: DS.attr('string'),
  body: DS.attr('string'),
  avatar: DS.attr('string'),
  email: DS.attr('string'),
  post: DS.belongsTo('post')
})