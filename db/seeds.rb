# author
2.times do
  Author.create(name: Faker.Name.name)
end

# categories
10.times do
  Category.create(title: Faker::Lorem.characters(8))
end

# tags
10.times do
  Tag.create(name: Faker::Lorem.characters(5))
end

# posts
10.times do
  Post.create(published_at: [nil, Date.now].sample, title: Faker::Lorem.characters(10), body: Faker::Lorem.sentence(3, true, 6), author: Author.all.sample)
end