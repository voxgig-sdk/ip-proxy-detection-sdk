# IpProxyDetection SDK feature factory

from ipproxydetection_sdk.feature.base_feature import IpProxyDetectionBaseFeature
from ipproxydetection_sdk.feature.ratelimit_feature import IpProxyDetectionRatelimitFeature
from ipproxydetection_sdk.feature.retry_feature import IpProxyDetectionRetryFeature
from ipproxydetection_sdk.feature.test_feature import IpProxyDetectionTestFeature
from ipproxydetection_sdk.feature.timeout_feature import IpProxyDetectionTimeoutFeature


_FEATURES = {
    "base": lambda: IpProxyDetectionBaseFeature(),
    "ratelimit": lambda: IpProxyDetectionRatelimitFeature(),
    "retry": lambda: IpProxyDetectionRetryFeature(),
    "test": lambda: IpProxyDetectionTestFeature(),
    "timeout": lambda: IpProxyDetectionTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
