class ProductionController < ApplicationController
  def index
    @production = Production.all
  end
end
