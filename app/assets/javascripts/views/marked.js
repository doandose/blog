Blog.MarkedView = Ember.View.extend({
    render: function(render) {
        value = this.get('value');

        if (value != undefined) {
            render.push(marked(value))
        } else {
            this._super()
        }
    },

    didInsertElement: function() {
        Rainbow.color()
    }
})