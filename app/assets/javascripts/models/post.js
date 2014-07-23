Blog.Post = DS.Model.extend(Blog.DatableMixin, {
    format: 'LL',
    published: DS.attr('boolean'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    body: DS.attr('string'),
    publishedAt: DS.attr('string'),

    tags: DS.hasMany('tag'),
    comments: DS.hasMany('comment'),
    category: DS.belongsTo('category'),
    author: DS.belongsTo('author'),

    tagsFormatted: function() {
        return this.get('tags').map(function(tag) {
            var formatted = '#' + tag.get('name');
            return tag.set('name', formatted);
        });
    }.property('tags.@each.name').cacheable()
})