Blog.CategorySerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin)
Blog.CommentSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin)
Blog.PostSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin)