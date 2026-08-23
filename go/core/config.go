package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "IpProxyDetection",
			"slug": "ip-proxy-detection",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://check.getipintel.net",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"check": map[string]any{},
			},
		},
		"entity": map[string]any{
			"check": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contact",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queryFlags",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queryFormat",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queryIP",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
				},
				"name": "check",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "your.email@example.com",
											"kind": "query",
											"name": "contact",
											"orig": "contact",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "m",
											"kind": "query",
											"name": "flag",
											"orig": "flag",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "8.8.8.8",
											"kind": "query",
											"name": "ip",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "b",
											"kind": "query",
											"name": "oflag",
											"orig": "oflag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/check.php",
								"parts": []any{
									"check.php",
								},
								"select": map[string]any{
									"exist": []any{
										"contact",
										"flag",
										"format",
										"ip",
										"oflag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
