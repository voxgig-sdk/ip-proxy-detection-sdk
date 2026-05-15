<?php
declare(strict_types=1);

// IpProxyDetection SDK utility: result_body

class IpProxyDetectionResultBody
{
    public static function call(IpProxyDetectionContext $ctx): ?IpProxyDetectionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
