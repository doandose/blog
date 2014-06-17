Blog.PostSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin)
Blog.TagSerializer = DS.RESTSerializer.extend()