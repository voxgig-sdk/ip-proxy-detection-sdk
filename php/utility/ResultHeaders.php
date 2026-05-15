<?php
declare(strict_types=1);

// IpProxyDetection SDK utility: result_headers

class IpProxyDetectionResultHeaders
{
    public static function call(IpProxyDetectionContext $ctx): ?IpProxyDetectionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
