Blog.DatableMixin = Ember.Mixin.create({
    formattedDate: function() {
        moment.lang('pt-br');

        var date = this.get('publishedAt'),
            format = this.get('format');

        return moment(date).format(format);
    }.property('publishedAt', 'format')
})