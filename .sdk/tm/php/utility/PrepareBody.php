<?php
declare(strict_types=1);

// IpProxyDetection SDK utility: prepare_body

class IpProxyDetectionPrepareBody
{
    public static function call(IpProxyDetectionContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
