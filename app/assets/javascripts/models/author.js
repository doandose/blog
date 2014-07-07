Blog.Author = DS.Model.extend(Blog.ImageableMixin, {
    name: DS.attr('string'),
    email: DS.attr('string'),
    posts: DS.hasMany('post')
})