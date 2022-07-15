Rails.application.routes.draw do
  # root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show]
    resource :session, only: %i[create destroy]

    resources :movies, only: %i[show index]
    resources :genres, only: %i[show index]
    resources :profiles, only: %i[create destroy show]
    resources :lists, only: %i[create destroy show]
    resources :list_movies, only: %i[create destroy show]
  end
end
