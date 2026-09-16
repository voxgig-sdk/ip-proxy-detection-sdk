# IpProxyDetection SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpProxyDetectionFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpProxyDetectionBaseFeature.new
    when "ratelimit"
      IpProxyDetectionRatelimitFeature.new
    when "retry"
      IpProxyDetectionRetryFeature.new
    when "test"
      IpProxyDetectionTestFeature.new
    when "timeout"
      IpProxyDetectionTimeoutFeature.new
    else
      IpProxyDetectionBaseFeature.new
    end
  end
end
