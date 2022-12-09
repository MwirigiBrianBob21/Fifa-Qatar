Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "stadia#index"

  # get "api/stadia", to: "api/stadia#index"
  namespace :api do
    resources :stadia, only: [:index, :show]
  end

  # get "upload-photo", to: "images#new"

  get "*path", to: "react#home"
  root "react#home"
end
