-- ProjectName SDK exists test

local sdk = require("ip-proxy-detection_sdk")

describe("IpProxyDetectionSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
