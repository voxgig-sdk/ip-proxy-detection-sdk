<?php
declare(strict_types=1);

// IpProxyDetection SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpProxyDetectionFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpProxyDetectionBaseFeature();
            case "test":
                return new IpProxyDetectionTestFeature();
            default:
                return new IpProxyDetectionBaseFeature();
        }
    }
}
