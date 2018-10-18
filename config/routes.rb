Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :beers, only: [:index, :show] do
        resources :reviews, only: [:index, :create]
      end
    end
  end

get '/beers', to: 'homes#index'
get '/beers/:id', to: 'homes#index'
get '/beers/:id/reviews/new', to: 'homes#index'

end
