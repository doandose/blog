Blog.PostsShowView = Ember.View.extend({
  templateName: 'posts/show',

  body: function() {
    model = this.get('controller.model')
    return marked(model.get('body'))
  }.property(),

  didInsertElement: function() {
    Rainbow.color()
  }
})