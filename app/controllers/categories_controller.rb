class CategoriesController < ApplicationController
  def index
    render json: Category.all, status: :ok
  end

  def show
    render json: Category.friendly.find(params[:id]), status: :ok
  end
end