Blog::Application.routes.draw do
  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      [mime_type, '*/*'].include?(request.format)
    end
  end

  constraints FormatTest.new(:html) do
    root to: 'application#index'
    get '*path' => 'application#index'
  end

  constraints FormatTest.new(:json) do
    resources :posts, only: [:index, :show]
    resources :categories, only: :index
    resources :authors, only: :index
    resources :comments, only: :create
  end
end