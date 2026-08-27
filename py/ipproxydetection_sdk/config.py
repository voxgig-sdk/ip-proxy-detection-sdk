# IpProxyDetection SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "IpProxyDetection",
            "slug": "ip-proxy-detection",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "http://check.getipintel.net",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "check": {},
            },
        },
        "entity": {
      "check": {
        "fields": [
          {
            "name": "contact",
            "type": "`$STRING`",
          },
          {
            "name": "queryFlags",
            "type": "`$STRING`",
          },
          {
            "name": "queryFormat",
            "type": "`$STRING`",
          },
          {
            "name": "queryIP",
            "type": "`$STRING`",
          },
          {
            "name": "result",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "m",
                      "kind": "query",
                      "name": "flag",
                      "orig": "flag",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "8.8.8.8",
                      "kind": "query",
                      "name": "ip",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "b",
                      "kind": "query",
                      "name": "oflag",
                      "orig": "oflag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/check.php",
                "parts": [
                  "check.php",
                ],
                "select": {
                  "exist": [
                    "contact",
                    "flag",
                    "format",
                    "ip",
                    "oflag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
