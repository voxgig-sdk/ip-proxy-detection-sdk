<?php
declare(strict_types=1);

// IpProxyDetection SDK utility: feature_add

class IpProxyDetectionFeatureAdd
{
    public static function call(IpProxyDetectionContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
