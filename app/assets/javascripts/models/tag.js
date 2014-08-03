Blog.Tag = DS.Model.extend({
    name: DS.attr('string'),
    post: DS.hasMany('post'),

    formatedName: function() {
        return '#' + this.get('name');
    }.property()
})