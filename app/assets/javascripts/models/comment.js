Blog.Comment = DS.Model.extend(Blog.ImageableMixin, {
    publishedAt: DS.attr('string'),
    name: DS.attr('string'),
    body: DS.attr('string'),
    email: DS.attr('string'),
    post: DS.belongsTo('post')
})