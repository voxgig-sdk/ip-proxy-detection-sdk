# IpProxyDetection SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpProxyDetectionFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpProxyDetectionBaseFeature.new
    when "test"
      IpProxyDetectionTestFeature.new
    else
      IpProxyDetectionBaseFeature.new
    end
  end
end
