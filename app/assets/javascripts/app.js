//= require_self
//= require_tree ./initializers
//= require_tree ./config
//= require_tree ./models/mixings
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./components

//= require_tree ./routes

var Blog = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true
})