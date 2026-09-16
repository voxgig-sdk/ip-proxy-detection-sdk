# IpProxyDetection SDK configuration

module IpProxyDetectionConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "IpProxyDetection",
        "slug" => "ip-proxy-detection",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "http://check.getipintel.net",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "check" => {},
        },
      },
      "entity" => {
        "check" => {
          "fields" => [
            {
              "name" => "contact",
              "type" => "`$STRING`",
            },
            {
              "name" => "queryFlags",
              "type" => "`$STRING`",
            },
            {
              "name" => "queryFormat",
              "type" => "`$STRING`",
            },
            {
              "name" => "queryIP",
              "type" => "`$STRING`",
            },
            {
              "name" => "result",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
          ],
          "name" => "check",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "your.email@example.com",
                        "kind" => "query",
                        "name" => "contact",
                        "orig" => "contact",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "m",
                        "kind" => "query",
                        "name" => "flag",
                        "orig" => "flag",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "8.8.8.8",
                        "kind" => "query",
                        "name" => "ip",
                        "orig" => "ip",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "b",
                        "kind" => "query",
                        "name" => "oflag",
                        "orig" => "oflag",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/check.php",
                  "segments" => [
                    {
                      "lit" => "check.php",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "contact",
                      "flag",
                      "format",
                      "ip",
                      "oflag",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "check.php",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpProxyDetectionFeatures.make_feature(name)
  end
end
