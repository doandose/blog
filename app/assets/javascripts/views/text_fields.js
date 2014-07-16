Blog.TextFields = Ember.View.extend({
    tagName: 'input',
    placeholder: "t('label.name')",
    maxlength: 120,
    attributeBindings: ['maxlength', 'placeholder']
})