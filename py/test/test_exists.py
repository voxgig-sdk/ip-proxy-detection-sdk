# ProjectName SDK exists test

import pytest
from ipproxydetection_sdk import IpProxyDetectionSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpProxyDetectionSDK.test(None, None)
        assert testsdk is not None
