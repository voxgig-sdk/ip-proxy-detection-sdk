# IpProxyDetection SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpProxyDetectionUtility.registrar = ->(u) {
  u.clean = IpProxyDetectionUtilities::Clean
  u.done = IpProxyDetectionUtilities::Done
  u.make_error = IpProxyDetectionUtilities::MakeError
  u.feature_add = IpProxyDetectionUtilities::FeatureAdd
  u.feature_hook = IpProxyDetectionUtilities::FeatureHook
  u.feature_init = IpProxyDetectionUtilities::FeatureInit
  u.fetcher = IpProxyDetectionUtilities::Fetcher
  u.make_fetch_def = IpProxyDetectionUtilities::MakeFetchDef
  u.make_context = IpProxyDetectionUtilities::MakeContext
  u.make_options = IpProxyDetectionUtilities::MakeOptions
  u.make_request = IpProxyDetectionUtilities::MakeRequest
  u.make_response = IpProxyDetectionUtilities::MakeResponse
  u.make_result = IpProxyDetectionUtilities::MakeResult
  u.make_point = IpProxyDetectionUtilities::MakePoint
  u.make_spec = IpProxyDetectionUtilities::MakeSpec
  u.make_url = IpProxyDetectionUtilities::MakeUrl
  u.param = IpProxyDetectionUtilities::Param
  u.prepare_auth = IpProxyDetectionUtilities::PrepareAuth
  u.prepare_body = IpProxyDetectionUtilities::PrepareBody
  u.prepare_headers = IpProxyDetectionUtilities::PrepareHeaders
  u.prepare_method = IpProxyDetectionUtilities::PrepareMethod
  u.prepare_params = IpProxyDetectionUtilities::PrepareParams
  u.prepare_path = IpProxyDetectionUtilities::PreparePath
  u.prepare_query = IpProxyDetectionUtilities::PrepareQuery
  u.result_basic = IpProxyDetectionUtilities::ResultBasic
  u.result_body = IpProxyDetectionUtilities::ResultBody
  u.result_headers = IpProxyDetectionUtilities::ResultHeaders
  u.transform_request = IpProxyDetectionUtilities::TransformRequest
  u.transform_response = IpProxyDetectionUtilities::TransformResponse
}
