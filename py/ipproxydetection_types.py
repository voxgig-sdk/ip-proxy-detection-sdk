# Typed models for the IpProxyDetection SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Check:
    contact: Optional[str] = None
    query_flag: Optional[str] = None
    query_format: Optional[str] = None
    query_ip: Optional[str] = None
    result: Optional[str] = None
    status: Optional[str] = None


@dataclass
class CheckLoadMatch:
    contact: Optional[str] = None
    query_flag: Optional[str] = None
    query_format: Optional[str] = None
    query_ip: Optional[str] = None
    result: Optional[str] = None
    status: Optional[str] = None

