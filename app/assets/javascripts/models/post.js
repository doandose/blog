Blog.Post = DS.Model.extend({
    published: DS.attr('boolean', {
        defaultValue: false
    }),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    createdAt: DS.attr('date', {
        defaultValue: function() {
            return new Date()
        }
    })
})


Blog.Post.FIXTURES = [{
    id: 1,
    title: 'foo',
    slug: 'foo',
    createdAt: new Date()
}, {
    id: 2,
    title: 'bar',
    slug: 'bar',
    createdAt: new Date()
}]