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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryFlags',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryFormat',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'queryIP',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'result',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
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
                  'args' => [
                    'query' => [
                      [
                        'example' => 'your.email@example.com',
                        'kind' => 'query',
                        'name' => 'contact',
                        'orig' => 'contact',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'm',
                        'kind' => 'query',
                        'name' => 'flag',
                        'orig' => 'flag',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'query',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'b',
                        'kind' => 'query',
                        'name' => 'oflag',
                        'orig' => 'oflag',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/check.php',
                  'segments' => [
                    [
                      'lit' => 'check.php',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'check.php',
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
