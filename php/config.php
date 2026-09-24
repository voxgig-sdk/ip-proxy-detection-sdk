<?php
declare(strict_types=1);

// IpProxyDetection SDK configuration

class IpProxyDetectionConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpProxyDetection",
                "slug" => "ip-proxy-detection",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "http://check.getipintel.net",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "check" => [],
                ],
            ],
            "entity" => [
        'check' => [
          'fields' => [
            [
              'name' => 'contact',
              'title' => 'Contact',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryFlags',
              'title' => 'Query Flags',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryFormat',
              'title' => 'Query Format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryIP',
              'title' => 'Query Ip',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'check',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/check.php',
                  'segments' => [
                    [
                      'lit' => 'check.php',
                    ],
                  ],
                  'parts' => [
                    'check.php',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'contact',
                        'orig' => 'contact',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'your.email@example.com',
                      ],
                      [
                        'name' => 'flag',
                        'orig' => 'flag',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'm',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'ip',
                        'orig' => 'ip',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '8.8.8.8',
                      ],
                      [
                        'name' => 'oflag',
                        'orig' => 'oflag',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'b',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contact',
                      'flag',
                      'format',
                      'ip',
                      'oflag',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpProxyDetectionFeatures::make_feature($name);
    }
}
