Blog.PostDetailsComponent = Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['klass'],
    klass: Ember.computed.alias('post.category.dominantColor')
})