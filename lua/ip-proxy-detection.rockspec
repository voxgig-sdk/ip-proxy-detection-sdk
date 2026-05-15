package = "voxgig-sdk-ip-proxy-detection"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ip-proxy-detection-sdk.git"
}
description = {
  summary = "IpProxyDetection SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ip-proxy-detection_sdk"] = "ip-proxy-detection_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
