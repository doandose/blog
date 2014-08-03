Blog.LoadableMixin = Ember.Mixin.create({
    spinnerCreate: function(el) {
        var opts = {
            lines: 17,
            length: 0,
            width: 8,
            radius: 30,
            corners: 1,
            rotate: 0,
            direction: 1,
            color: '#ccc',
            speed: 2.2,
            trail: 60,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9,
            top: '50%',
            left: '50%'
        };

        var spinner = new Spinner(opts).spin()
        el.append(spinner.el)
    },

    actions: {
        loading: function(transition, originRoute) {
            var view = Ember.View.create({
                templateName: 'loading'
            })

            view._insertElementLater(function() {
                el = view.$().appendTo('body')
                this.spinnerCreate(el.find('.spin'))
            }.bind(this));

            this.router.one('didTransition', function() {
                view.destroy();
            });
        }
    }
})