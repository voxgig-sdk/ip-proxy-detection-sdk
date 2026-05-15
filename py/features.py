# IpProxyDetection SDK feature factory

from feature.base_feature import IpProxyDetectionBaseFeature
from feature.test_feature import IpProxyDetectionTestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpProxyDetectionBaseFeature(),
        "test": lambda: IpProxyDetectionTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
