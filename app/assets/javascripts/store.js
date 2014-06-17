Blog.Store = DS.Store.extend({
	revision: 12,
  adapter: DS.RESTAdapter.create({bulkCommmit: false})
})

Blog.RESTAdapter = DS.RESTAdapter.extend({
    /* ... */
    serializer: DS.RESTSerializer.extend({
        /* ... */
        addHasMany: function(hash, record, key, relationship)
        {
        	console.log("aaaaa");
            if (/_ids$/.test(key)) {
                hash[key] = [];
                record.get(this.pluralize(key.replace(/_ids$/, ''))).forEach(function(item) {
                    hash[key].push(item.get('id'));
                });
            }
            return hash;
        }
    })
});