Blog.Adapter = DS.RESTAdapter.extend({
    serializer: DS.RESTSerializer.create()
});

Blog.ApplicationStore = DS.Store.extend({
    revision: 12,
    adapter: Blog.Adapter.create()
});