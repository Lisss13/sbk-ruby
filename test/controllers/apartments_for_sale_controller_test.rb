require 'test_helper'

class ApartmentsForSaleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get apartments_for_sale_index_url
    assert_response :success
  end

  test "should get detail" do
    get apartments_for_sale_detail_url
    assert_response :success
  end

end
