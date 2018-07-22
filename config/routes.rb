Rails.application.routes.draw do
  get '/contacts', to: 'contacts#index'
  get '/apartments-for-sale', to: 'apartments_for_sale#index'
  get '/apartments-for-sale/detail', to: 'apartments_for_sale#detail'
  get '/laboratory', to: 'laboratory#index'
  get '/production', to: 'production#index'
  get '/services', to: 'services#index'
  root 'main#index'
end
