# author
2.times do
  Author.create(name: Faker::Name.name, email: Faker::Internet.email, linkedin: Faker::Internet.url)
end

# categories
colors = %w(pomegranate alizarin nephritis silver wisteria belize_hole orange)
6.times do
  Category.create(title: Faker::Lorem.word, dominant_color: colors.sample)
end

# tags
10.times do
  Tag.create(name: Faker::Lorem.word)
end

# posts
100.times do
  Post.create(
    published_at: [nil, DateTime.now + rand(99).minutes].sample,
    title:        Faker::Lorem.sentence(6),
    description:  Faker::Lorem.sentence(19),
    body:         Faker::Lorem.paragraph(200),
    author:       Author.all.sample,
    category:     Category.unscoped.sample,
    tags:         Tag.all.sample(5)
  )
end

# comments
10.times do
  Comment.create(
    published_at: [nil, DateTime.now].sample,
    name: Faker::Name.name,
    email: Faker::Internet.email,
    body: Faker::Lorem.sentence(2),
    post: Post.all.sample
  )
end