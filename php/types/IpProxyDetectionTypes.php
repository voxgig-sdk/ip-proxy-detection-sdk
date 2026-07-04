<?php
declare(strict_types=1);

// Typed models for the IpProxyDetection SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Check entity data model. */
class Check
{
    public ?string $contact = null;
    public ?string $query_flag = null;
    public ?string $query_format = null;
    public ?string $query_ip = null;
    public ?string $result = null;
    public ?string $status = null;
}

/** Match filter for Check#load (any subset of Check fields). */
class CheckLoadMatch
{
    public ?string $contact = null;
    public ?string $query_flag = null;
    public ?string $query_format = null;
    public ?string $query_ip = null;
    public ?string $result = null;
    public ?string $status = null;
}

