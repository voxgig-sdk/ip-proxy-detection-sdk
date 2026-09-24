"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CheckEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_PROXY_DETECTION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_PROXY_DETECTION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpProxyDetectionSDK.test();
        const ent = testsdk.Check();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_PROXY_DETECTION_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'check.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contact": { "a": true, "h": "Contact", "n": "contact", "r": false, "t": "`$STRING`", "key$": "contact", "index$": 0 }, "queryFlags": { "a": true, "h": "Query Flags", "n": "queryFlags", "r": false, "t": "`$STRING`", "key$": "queryFlags", "index$": 1 }, "queryFormat": { "a": true, "h": "Query Format", "n": "queryFormat", "r": false, "t": "`$STRING`", "key$": "queryFormat", "index$": 2 }, "queryIP": { "a": true, "h": "Query Ip", "n": "queryIP", "r": false, "t": "`$STRING`", "key$": "queryIP", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$STRING`", "key$": "result", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 5 } }, "name": "check", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /check.php", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "your.email@example.com", "k": "query", "n": "contact", "or": "contact", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "m", "k": "query", "n": "flag", "or": "flag", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "8.8.8.8", "k": "query", "n": "ip", "or": "ip", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "b", "k": "query", "n": "oflag", "or": "oflag", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/check.php", "q": { "exist": ["contact", "flag", "format", "ip", "oflag"] }, "r": {}, "s": [{ "lit": "check.php" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "check", "name__orig": "check", "Name": "Check", "name_": "check", "name-": "check", "NAME": "CHECK", "index$": 0 }, { "active": true, "entity": "check", "key$": "BasicCheckFlow", "kind": "basic", "name": "BasicCheckFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "check_ref01", "srcdatavar": "check_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-check_ref01" } }], "index$": 0 }] }, 'Check', { "GET /check.php": { "protocol": "http", "operationId": "checkIP", "responses": { "200": { "description": "Successful response with proxy detection result", "content": { "text/plain": { "schema": { "type": "string", "description": "A value between 0-1 indicating proxy probability, or negative value on error", "example": "0.99" } }, "application/json": { "schema": { "oneOf": [{ "type": "object", "required": ["status", "result", "queryIP", "queryFormat", "contact"], "properties": { "status": { "type": "string", "enum": ["success"], "description": "Status of the query" }, "result": { "type": "string", "description": "Probability score between 0-1 indicating likelihood of proxy/VPN/bad IP. Values > 0.99 are most likely proxies", "example": "0.99" }, "queryIP": { "type": "string", "description": "The IP address that was queried", "example": "8.8.8.8" }, "queryFlags": { "type": "string", "nullable": true, "description": "The flags parameter used in the query", "example": "m" }, "queryFormat": { "type": "string", "description": "The format parameter used in the query", "example": "json" }, "contact": { "type": "string", "description": "The contact email address provided in the query", "example": "your.email@example.com" }, "BadIP": { "type": "integer", "description": "Present when oflags=b is used. 1 indicates bad IP, 0 otherwise", "enum": [0, 1], "example": 0 }, "Country": { "type": "string", "description": "Present when oflags=c is used. 2-character ISO-3166 country code", "example": "US" }, "ASN": { "type": "string", "description": "Present when oflags=a is used. ASN number(s) of the IP. Multiple ASNs separated by semicolon", "example": "15169" }, "iCloudRelayEgress": { "type": "integer", "description": "Present when oflags=i is used. 1 indicates iCloud Relay Egress IP, 0 otherwise", "enum": [0, 1], "example": 0 }, "GoogleOneVPN": { "type": "integer", "description": "Present when oflags=i is used. 1 indicates Google One VPN IP, 0 otherwise", "enum": [0, 1], "example": 0 }, "VPNType": { "type": "string", "description": "Present when oflags=i is used. Type of VPN detected", "enum": ["none", "GoogleOneVPN", "GoogleFiVPN", "iCloudRelayEgress"], "example": "none" }, "ResidentialProxy": { "type": "string", "description": "Present when oflags=r is used. Score from 0-1 where 1 is a highly active residential proxy", "example": "0" } }, "x-ref": "#/components/schemas/SuccessResponse" }, { "type": "object", "required": ["status", "result", "message", "queryIP", "queryFormat", "contact"], "properties": { "status": { "type": "string", "enum": ["error"], "description": "Status of the query" }, "result": { "type": "string", "description": "Error code: -1 (invalid input), -2 (invalid IP), -3 (unroutable/private address), -4 (database unavailable), -5 (IP banned/no permission), -6 (no/invalid contact info)", "enum": ["-1", "-2", "-3", "-4", "-5", "-6"], "example": "-2" }, "message": { "type": "string", "description": "Human-readable error message", "example": "Invalid IP address" }, "queryIP": { "type": "string", "description": "The IP address that was queried", "example": "10.10.10.10" }, "queryFlags": { "type": "string", "nullable": true, "description": "The flags parameter used in the query", "example": null }, "queryFormat": { "type": "string", "description": "The format parameter used in the query", "example": "json" }, "contact": { "type": "string", "description": "The contact email address provided in the query", "example": "your.email@example.com" } }, "x-ref": "#/components/schemas/ErrorResponse" }] }, "examples": { "success": { "summary": "Successful proxy detection", "value": { "status": "success", "result": "1", "queryIP": "66.228.119.72", "queryFlags": "m", "queryFormat": "json", "contact": "your.email@example.com" } }, "successWithExtendedInfo": { "summary": "Success with additional flags", "value": { "status": "success", "result": "0.99", "queryIP": "8.8.8.8", "queryFlags": "b", "queryFormat": "json", "contact": "your.email@example.com", "BadIP": 0, "Country": "US", "ASN": "15169", "iCloudRelayEgress": 0, "GoogleOneVPN": 0, "VPNType": "none", "ResidentialProxy": "0" } }, "error": { "summary": "Error response", "value": { "status": "error", "result": "-2", "message": "Invalid IP address", "queryIP": "10.10.10.10,8.8.8.8", "queryFlags": null, "queryFormat": "json", "contact": "your.email@example.com" } } } } } }, "400": { "description": "Bad Request - Invalid parameters or error code returned", "content": { "text/plain": { "schema": { "type": "string", "description": "Negative error code", "enum": ["-1", "-2", "-3", "-4", "-5", "-6"], "example": "-2" } }, "application/json": { "schema": { "type": "object", "required": ["status", "result", "message", "queryIP", "queryFormat", "contact"], "properties": { "status": { "type": "string", "enum": ["error"], "description": "Status of the query" }, "result": { "type": "string", "description": "Error code: -1 (invalid input), -2 (invalid IP), -3 (unroutable/private address), -4 (database unavailable), -5 (IP banned/no permission), -6 (no/invalid contact info)", "enum": ["-1", "-2", "-3", "-4", "-5", "-6"], "example": "-2" }, "message": { "type": "string", "description": "Human-readable error message", "example": "Invalid IP address" }, "queryIP": { "type": "string", "description": "The IP address that was queried", "example": "10.10.10.10" }, "queryFlags": { "type": "string", "nullable": true, "description": "The flags parameter used in the query", "example": null }, "queryFormat": { "type": "string", "description": "The format parameter used in the query", "example": "json" }, "contact": { "type": "string", "description": "The contact email address provided in the query", "example": "your.email@example.com" } }, "x-ref": "#/components/schemas/ErrorResponse" } } } }, "429": { "description": "Too Many Requests - Query limit exceeded (500 queries per day, 15 queries per minute)", "content": { "text/plain": { "schema": { "type": "string", "example": "Rate limit exceeded" } } } } }, "parameters": [{ "name": "ip", "in": "query", "description": "The IP address to check (IPv4 fully supported, IPv6 partially supported)", "required": true, "schema": { "type": "string", "example": "8.8.8.8" }, "index$": 0 }, { "name": "contact", "in": "query", "description": "Valid email address for contact information (required for all queries)", "required": true, "schema": { "type": "string", "format": "email", "example": "your.email@example.com" }, "index$": 1 }, { "name": "flags", "in": "query", "description": "Optional flags to modify behavior: 'm' (dynamic ban list only), 'b' (dynamic ban list and checks), 'f' (force full lookup), 'n' (exclude real-time block list). Can be combined (e.g., 'nm')", "required": false, "schema": { "type": "string", "enum": ["m", "b", "f", "n", "nm", "nb", "nf"], "example": "m" }, "index$": 2 }, { "name": "oflags", "in": "query", "description": "Output flags for additional information: 'b' (bad IP check), 'c' (country), 'i' (iCloud/Google VPN detection), 'a' (ASN number), 'r' (residential proxy detection). Can be combined (e.g., 'bc')", "required": false, "schema": { "type": "string", "pattern": "^[bciar]+$", "example": "b" }, "index$": 3 }, { "name": "format", "in": "query", "description": "Output format for the response", "required": false, "schema": { "type": "string", "enum": ["json"], "example": "json" }, "index$": 4 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let check_ref01_data = Object.values(setup.data.existing.check)[0];
        // LOAD
        const check_ref01_ent = client.Check();
        const check_ref01_match_dt0 = {};
        const check_ref01_data_dt0 = (await check_ref01_ent.load(check_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != check_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/check/CheckTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpProxyDetectionSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['check01', 'check02', 'check03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_PROXY_DETECTION_TEST_CHECK_ENTID': idmap,
        'IP_PROXY_DETECTION_TEST_LIVE': 'FALSE',
        'IP_PROXY_DETECTION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_PROXY_DETECTION_TEST_CHECK_ENTID'];
    const live = 'TRUE' === env.IP_PROXY_DETECTION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_PROXY_DETECTION_TEST_CHECK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IpProxyDetectionSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.IP_PROXY_DETECTION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CheckEntity.test.js.map