# IpProxyDetection SDK exists test

require "minitest/autorun"
require_relative "../IpProxyDetection_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpProxyDetectionSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
