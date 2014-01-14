MarketApp::Application.routes.draw do
  resources :categories

  resources :products

  root 'application#index'
end
