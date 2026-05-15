-- IpProxyDetection SDK error

local IpProxyDetectionError = {}
IpProxyDetectionError.__index = IpProxyDetectionError


function IpProxyDetectionError.new(code, msg, ctx)
  local self = setmetatable({}, IpProxyDetectionError)
  self.is_sdk_error = true
  self.sdk = "IpProxyDetection"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpProxyDetectionError:error()
  return self.msg
end


function IpProxyDetectionError:__tostring()
  return self.msg
end


return IpProxyDetectionError
