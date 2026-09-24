"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'IpProxyDetection',
        slug: "ip-proxy-detection",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "http://check.getipintel.net",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            check: {},
        }
    };
    entity = {
        "check": {
            "fields": [
                {
                    "name": "contact",
                    "title": "Contact",
                    "type": "`$STRING`"
                },
                {
                    "name": "queryFlags",
                    "title": "Query Flags",
                    "type": "`$STRING`"
                },
                {
                    "name": "queryFormat",
                    "title": "Query Format",
                    "type": "`$STRING`"
                },
                {
                    "name": "queryIP",
                    "title": "Query Ip",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                }
            ],
            "name": "check",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/check.php",
                            "segments": [
                                {
                                    "lit": "check.php"
                                }
                            ],
                            "parts": [
                                "check.php"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "contact",
                                        "orig": "contact",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "your.email@example.com"
                                    },
                                    {
                                        "name": "flag",
                                        "orig": "flag",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "m"
                                    },
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "ip",
                                        "orig": "ip",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "8.8.8.8"
                                    },
                                    {
                                        "name": "oflag",
                                        "orig": "oflag",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "b"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "contact",
                                    "flag",
                                    "format",
                                    "ip",
                                    "oflag"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map