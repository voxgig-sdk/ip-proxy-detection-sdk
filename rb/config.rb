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
        "test" => {
          "options" => {
            "active" => false,
          },
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
                  "parts" => [
                    "check.php",
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
