// Blog.PostsRoute = Ember.Route.extend();

// Blog.PostsIndexRoute = Blog.PostsRoute.extend({
//     model: function() {
//         return this.store.findAll('post');
//     }
// });

// Blog.PostsShowRoute = Blog.PostsRoute.extend({
//     model: function(params) {
//         console.log(params, "=======1========")
//         return this.store.findBy('slug', params.slug);
//     }
// });

// Blog.PostRoute = Ember.Route.extend({
//     model: function(params) {
//         console.log(params, "=======2========", Blog.Post)
//         return Blog.Post.find(params.slug)
//     }
// });

// Blog.PostsShowRoute = Blog.PostRoute.extend();

Blog.PostsRoute = Ember.Route.extend({
  model: function(){
    console.log("======= index")
    return this.store.findAll('post')
  }
})

Blog.PostRoute = Ember.Route.extend({
  model: function(params){
    console.log("=======", this)
    // return this.store.findBy('slug', params.slug)
  }
})