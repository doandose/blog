Blog.Comment = DS.Model.extend({
  body: DS.attr('string'),
  avatar: DS.attr('string'),
  email: DS.attr('string')
})