# IpProxyDetection SDK utility: make_context

from projectname_sdk.core.context import IpProxyDetectionContext


def make_context_util(ctxmap, basectx):
    return IpProxyDetectionContext(ctxmap, basectx)
