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
    t.string "name"
    t.string "email"
  end

  create_table "categories", force: true do |t|
    t.string "title"
    t.string "slug"
  end

  create_table "comments", force: true do |t|
    t.datetime "published_at"
    t.string   "name"
    t.string   "email"
    t.text     "body"
    t.integer  "post_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "posts", force: true do |t|
    t.string   "title"
    t.string   "description"
    t.string   "slug"
    t.text     "body"
    t.datetime "published_at"
    t.integer  "author_id"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["author_id", "published_at"], name: "index_posts_on_author_id_and_published_at", using: :btree
  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["category_id"], name: "index_posts_on_category_id", using: :btree
  add_index "posts", ["published_at"], name: "index_posts_on_published_at", using: :btree
  add_index "posts", ["slug"], name: "index_posts_on_slug", using: :btree

  create_table "posts_tags", id: false, force: true do |t|
    t.integer "post_id"
    t.integer "tag_id"
  end

  add_index "posts_tags", ["post_id"], name: "index_posts_tags_on_post_id", using: :btree
  add_index "posts_tags", ["tag_id"], name: "index_posts_tags_on_tag_id", using: :btree

  create_table "tags", force: true do |t|
    t.string "name"
  end

end
