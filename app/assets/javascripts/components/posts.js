Blog.PostDetailsComponent = Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['colorName'],
    colorName: Ember.computed.alias('post.category.dominantColor')
})