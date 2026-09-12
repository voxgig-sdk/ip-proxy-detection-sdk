"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
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
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
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
                    "type": "`$STRING`"
                },
                {
                    "name": "queryFlags",
                    "type": "`$STRING`"
                },
                {
                    "name": "queryFormat",
                    "type": "`$STRING`"
                },
                {
                    "name": "queryIP",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
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
                            "args": {
                                "query": [
                                    {
                                        "example": "your.email@example.com",
                                        "kind": "query",
                                        "name": "contact",
                                        "orig": "contact",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "m",
                                        "kind": "query",
                                        "name": "flag",
                                        "orig": "flag",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "8.8.8.8",
                                        "kind": "query",
                                        "name": "ip",
                                        "orig": "ip",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "b",
                                        "kind": "query",
                                        "name": "oflag",
                                        "orig": "oflag",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/check.php",
                            "segments": [
                                {
                                    "lit": "check.php"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact",
                                    "flag",
                                    "format",
                                    "ip",
                                    "oflag"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "check.php"
                            ]
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