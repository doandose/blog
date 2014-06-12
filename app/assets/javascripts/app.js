//= require_self
//= require store
//= require router
//= require_tree ./routes
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./templates

var Blog = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_BINDINGS: true,
	LOG_ACTIVE_GENERATION: true,
	LOG_VIEW_LOOKUPS: true
})