# IpProxyDetection SDK utility: feature_add
module IpProxyDetectionUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
