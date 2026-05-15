<?php
declare(strict_types=1);

// IpProxyDetection SDK exists test

require_once __DIR__ . '/../ipproxydetection_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = IpProxyDetectionSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
