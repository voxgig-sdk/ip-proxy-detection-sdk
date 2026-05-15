<?php
declare(strict_types=1);

// IpProxyDetection SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpProxyDetectionUtility::setRegistrar(function (IpProxyDetectionUtility $u): void {
    $u->clean = [IpProxyDetectionClean::class, 'call'];
    $u->done = [IpProxyDetectionDone::class, 'call'];
    $u->make_error = [IpProxyDetectionMakeError::class, 'call'];
    $u->feature_add = [IpProxyDetectionFeatureAdd::class, 'call'];
    $u->feature_hook = [IpProxyDetectionFeatureHook::class, 'call'];
    $u->feature_init = [IpProxyDetectionFeatureInit::class, 'call'];
    $u->fetcher = [IpProxyDetectionFetcher::class, 'call'];
    $u->make_fetch_def = [IpProxyDetectionMakeFetchDef::class, 'call'];
    $u->make_context = [IpProxyDetectionMakeContext::class, 'call'];
    $u->make_options = [IpProxyDetectionMakeOptions::class, 'call'];
    $u->make_request = [IpProxyDetectionMakeRequest::class, 'call'];
    $u->make_response = [IpProxyDetectionMakeResponse::class, 'call'];
    $u->make_result = [IpProxyDetectionMakeResult::class, 'call'];
    $u->make_point = [IpProxyDetectionMakePoint::class, 'call'];
    $u->make_spec = [IpProxyDetectionMakeSpec::class, 'call'];
    $u->make_url = [IpProxyDetectionMakeUrl::class, 'call'];
    $u->param = [IpProxyDetectionParam::class, 'call'];
    $u->prepare_auth = [IpProxyDetectionPrepareAuth::class, 'call'];
    $u->prepare_body = [IpProxyDetectionPrepareBody::class, 'call'];
    $u->prepare_headers = [IpProxyDetectionPrepareHeaders::class, 'call'];
    $u->prepare_method = [IpProxyDetectionPrepareMethod::class, 'call'];
    $u->prepare_params = [IpProxyDetectionPrepareParams::class, 'call'];
    $u->prepare_path = [IpProxyDetectionPreparePath::class, 'call'];
    $u->prepare_query = [IpProxyDetectionPrepareQuery::class, 'call'];
    $u->result_basic = [IpProxyDetectionResultBasic::class, 'call'];
    $u->result_body = [IpProxyDetectionResultBody::class, 'call'];
    $u->result_headers = [IpProxyDetectionResultHeaders::class, 'call'];
    $u->transform_request = [IpProxyDetectionTransformRequest::class, 'call'];
    $u->transform_response = [IpProxyDetectionTransformResponse::class, 'call'];
});
