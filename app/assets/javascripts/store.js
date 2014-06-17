Blog.AppSerializer = DS.RESTSerializer.extend()

Blog.Adapter = DS.RESTAdapter.extend({
    serializer: Blog.AppSerializer.create()
});

Blog.ApplicationStore = DS.Store.extend({
    revision: 12,
    adapter: Blog.Adapter.create()
});