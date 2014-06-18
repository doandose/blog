//= require_self
//= require_tree ./serializers
//= require store
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./templates
//= require router
//= require_tree ./routes

var Blog = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true
})