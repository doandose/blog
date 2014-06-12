# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 7) do

  create_table "authors", force: true do |t|
    t.string   "name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "categories", force: true do |t|
    t.string "title"
    t.string "slug"
  end

  create_table "categories_posts", id: false, force: true do |t|
    t.integer "categories_id"
    t.integer "posts_id"
  end

  add_index "categories_posts", ["categories_id"], name: "index_categories_posts_on_categories_id", using: :btree
  add_index "categories_posts", ["posts_id"], name: "index_categories_posts_on_posts_id", using: :btree

  create_table "comments", force: true do |t|
    t.string  "email"
    t.text    "body"
    t.integer "post_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "posts", force: true do |t|
    t.string   "title"
    t.string   "slug"
    t.text     "body"
    t.integer  "author_id"
    t.datetime "published_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["author_id", "published_at"], name: "index_posts_on_author_id_and_published_at", using: :btree
  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["published_at"], name: "index_posts_on_published_at", using: :btree
  add_index "posts", ["slug"], name: "index_posts_on_slug", using: :btree

  create_table "posts_tags", id: false, force: true do |t|
    t.integer "posts_id"
    t.integer "tags_id"
  end

  add_index "posts_tags", ["posts_id"], name: "index_posts_tags_on_posts_id", using: :btree
  add_index "posts_tags", ["tags_id"], name: "index_posts_tags_on_tags_id", using: :btree

  create_table "tags", force: true do |t|
    t.string "name"
  end

end
