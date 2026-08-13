# IpProxyDetection SDK utility: make_context

from ipproxydetection_sdk.core.context import IpProxyDetectionContext


def make_context_util(ctxmap, basectx):
    return IpProxyDetectionContext(ctxmap, basectx)
