Blog.Post = DS.Model.extend({
	published: DS.attr('boolean', {defaultValue: false}),
	slug: DS.attr('string'),
	title: DS.attr('string'),
	createdAt: DS.attr('date')
  // tags: DS.hasMany('tags')
})