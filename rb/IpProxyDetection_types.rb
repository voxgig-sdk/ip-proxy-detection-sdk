# frozen_string_literal: true

# Typed models for the IpProxyDetection SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Check entity data model.
#
# @!attribute [rw] contact
#   @return [String, nil]
#
# @!attribute [rw] query_flag
#   @return [String, nil]
#
# @!attribute [rw] query_format
#   @return [String, nil]
#
# @!attribute [rw] query_ip
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Check = Struct.new(
  :contact,
  :query_flag,
  :query_format,
  :query_ip,
  :result,
  :status,
  keyword_init: true
)

# Request payload for Check#load.
#
# @!attribute [rw] contact
#   @return [String, nil]
#
# @!attribute [rw] query_flag
#   @return [String, nil]
#
# @!attribute [rw] query_format
#   @return [String, nil]
#
# @!attribute [rw] query_ip
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
CheckLoadMatch = Struct.new(
  :contact,
  :query_flag,
  :query_format,
  :query_ip,
  :result,
  :status,
  keyword_init: true
)

