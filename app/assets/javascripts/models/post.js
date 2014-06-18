Blog.Post = DS.Model.extend({
    published: DS.attr('boolean'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    body: DS.attr('string'),
    createdAt: DS.attr('string'),
    tags: DS.hasMany('tag'),
    comments: DS.hasMany('comment')
})