Blog.Tag = DS.Model.extend({
  name: DS.attr('string'),
  tags: DS.hasMany('post', { async: true })
})