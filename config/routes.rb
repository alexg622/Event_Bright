Rails.application.routes.draw do


  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :events
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
