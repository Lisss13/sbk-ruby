require 'test_helper'

class ProductionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get production_index_url
    assert_response :success
  end

end
