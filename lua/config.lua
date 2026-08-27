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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryFlags",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryFormat",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "queryIP",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "result",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
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
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "your.email@example.com",
                      ["kind"] = "query",
                      ["name"] = "contact",
                      ["orig"] = "contact",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "m",
                      ["kind"] = "query",
                      ["name"] = "flag",
                      ["orig"] = "flag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "8.8.8.8",
                      ["kind"] = "query",
                      ["name"] = "ip",
                      ["orig"] = "ip",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "b",
                      ["kind"] = "query",
                      ["name"] = "oflag",
                      ["orig"] = "oflag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/check.php",
                ["parts"] = {
                  "check.php",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
