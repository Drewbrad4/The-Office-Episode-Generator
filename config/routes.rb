Rails.application.routes.draw do
  resources :episodes
  root to: 'home#index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
end
