Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "stadia#index"

  get "api/stadia", to: "api/stadia#index"
  # post "api/image", to: "api/image#create"
  post "/api/internet_speed", to: "api/internet_speed#create"

  namespace :api do
    resources :stadia, only: [:index, :show]
  end

  namespace :api do
    resources :images, only: [:index]
  end

  # get "upload-photo", to: "images#new"
  # get 'api/image', to: 'image#index'
  get "*path", to: "react#home"
  root "react#home"
end
