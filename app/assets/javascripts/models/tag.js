Blog.Tag = DS.Model.extend({
    name: DS.attr('string'),
    post: DS.belongsTo('post', {
        embedded: 'always'
    })
})