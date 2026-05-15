# IpProxyDetection SDK utility: make_context
require_relative '../core/context'
module IpProxyDetectionUtilities
  MakeContext = ->(ctxmap, basectx) {
    IpProxyDetectionContext.new(ctxmap, basectx)
  }
end
