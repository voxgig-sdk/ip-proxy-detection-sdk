-- IpProxyDetection SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "IpProxyDetection",
      slug = "ip-proxy-detection",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "http://check.getipintel.net",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["check"] = {},
      },
    },
    entity = {
      ["check"] = {
        ["fields"] = {
          {
            ["name"] = "contact",
            ["title"] = "Contact",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryFlags",
            ["title"] = "Query Flags",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryFormat",
            ["title"] = "Query Format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryIP",
            ["title"] = "Query Ip",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "check",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/check.php",
                ["segments"] = {
                  {
                    ["lit"] = "check.php",
                  },
                },
                ["parts"] = {
                  "check.php",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "contact",
                      ["orig"] = "contact",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "your.email@example.com",
                    },
                    {
                      ["name"] = "flag",
                      ["orig"] = "flag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "m",
                    },
                    {
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "json",
                    },
                    {
                      ["name"] = "ip",
                      ["orig"] = "ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "8.8.8.8",
                    },
                    {
                      ["name"] = "oflag",
                      ["orig"] = "oflag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "b",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "contact",
                    "flag",
                    "format",
                    "ip",
                    "oflag",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
