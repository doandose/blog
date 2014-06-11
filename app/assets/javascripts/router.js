Blog.Router.reopen({
    location: 'history',
    rootURL: '/'
})

Blog.Router.map(function() {
    this.resource('posts', function() {
        this.route('index', {path: ''})
    })

    this.resource('posts', function() {
        this.route('show', {path: ':slug'})
    })
})