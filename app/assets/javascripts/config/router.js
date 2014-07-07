Blog.Router.reopen({
    location: 'history',
    rootURL: '/'
})

Blog.Router.map(function() {
    this.resource('posts', {
        path: ''
    }, function() {
        this.route('show', {
            path: '/:category_slug/:slug'
        })
    }),

    this.resource('categories', {
        path: '/categorias'
    }, function() {
        this.route('show', {
            path: '/:slug'
        })
    })
})