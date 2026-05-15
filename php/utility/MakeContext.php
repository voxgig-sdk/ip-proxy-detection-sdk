<?php
declare(strict_types=1);

// IpProxyDetection SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpProxyDetectionMakeContext
{
    public static function call(array $ctxmap, ?IpProxyDetectionContext $basectx): IpProxyDetectionContext
    {
        return new IpProxyDetectionContext($ctxmap, $basectx);
    }
}
