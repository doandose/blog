Blog.Post = DS.Model.extend({
    published: DS.attr('boolean'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    body: DS.attr('string'),
    publishedAt: DS.attr('string'),

    tags: DS.hasMany('tag'),
    comments: DS.hasMany('comment'),
    category: DS.belongsTo('category'),
    author: DS.belongsTo('author')
})