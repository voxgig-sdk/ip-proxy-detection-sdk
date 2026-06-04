# IpProxyDetection SDK

Score any IPv4/IPv6 address for proxy, VPN, Tor, or otherwise abusive traffic on a 0–1 probability scale

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About IP Proxy Detection

[GetIPIntel](https://getipintel.net/) is a free proxy, VPN and bad-IP detection service maintained by an independent developer with a background in networking and machine learning. The SDK wraps the public endpoint at `http://check.getipintel.net/check.php`, which returns a single probability score indicating how likely a given IP address is to be a proxy, VPN, Tor exit, or otherwise abusive host.

What you get from the API:
- A probability score between `0` and `1` (inclusive) on success — scores above `0.99` are described as "most likely proxies", below `0.90` as low risk.
- Negative integer values on error conditions (invalid input, rate-limit, etc.).
- Optional `flags` and `oflags` query parameters to tune the lookup (e.g. include machine-learning checks, full bad-IP checks, or extra metadata).
- Optional `format=json` for a JSON response instead of plain text.

Detection draws on dynamic ban lists of known public proxies, machine-learning inference on IP characteristics, and feeds for malware, botnets and compromised hosts. The contact email parameter is mandatory, CORS is disabled (server-to-server use only), and clients exceeding the free quota receive HTTP 429.

## Try it

**TypeScript**
```bash
npm install ip-proxy-detection
```

**Python**
```bash
pip install ip-proxy-detection-sdk
```

**PHP**
```bash
composer require voxgig/ip-proxy-detection-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ip-proxy-detection-sdk/go
```

**Ruby**
```bash
gem install ip-proxy-detection-sdk
```

**Lua**
```bash
luarocks install ip-proxy-detection-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpProxyDetectionSDK } from 'ip-proxy-detection'

const client = new IpProxyDetectionSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ip-proxy-detection-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ip-proxy-detection": {
      "command": "/abs/path/to/ip-proxy-detection-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Check** | Looks up a single IP address and returns its proxy/VPN/abuse probability score via `GET /check.php?ip=<addr>&contact=<email>` (optionally `format=json`, `flags=`, `oflags=`). | `/check.php` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipproxydetection_sdk import IpProxyDetectionSDK

client = IpProxyDetectionSDK({})


# Load a specific check
check, err = client.Check(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipproxydetection_sdk.php';

$client = new IpProxyDetectionSDK([]);


// Load a specific check
[$check, $err] = $client->Check(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ip-proxy-detection-sdk/go"

client := sdk.NewIpProxyDetectionSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "IpProxyDetection_sdk"

client = IpProxyDetectionSDK.new({})


# Load a specific check
check, err = client.Check(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ip-proxy-detection_sdk")

local client = sdk.new({})


-- Load a specific check
local check, err = client:Check(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpProxyDetectionSDK.test()
const result = await client.Check().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpProxyDetectionSDK.test(None, None)
result, err = client.Check(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpProxyDetectionSDK::test(null, null);
[$result, $err] = $client->Check(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Check(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpProxyDetectionSDK.test(nil, nil)
result, err = client.Check(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Check(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the IP Proxy Detection

- Upstream: [https://getipintel.net/](https://getipintel.net/)
- API docs: [https://getipintel.net/free-proxy-vpn-tor-detection-api/](https://getipintel.net/free-proxy-vpn-tor-detection-api/)

- Free tier is rate-limited to roughly 15 requests/minute and 500 queries/day; higher volumes require a paid arrangement.
- Every request must include a valid `contact` email — queries without accurate contact info are rejected.
- Users must credit GetIPIntel and may not resell the returned data or run random/incremental IP sweeps.
- No API key system; the contact email serves as identification.

---

Generated from the IP Proxy Detection OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
