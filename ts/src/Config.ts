
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'IpProxyDetection',
        slug: "ip-proxy-detection",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
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

  }


  options = {
    base: "http://check.getipintel.net",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        check: {
        },
  
    }
  }


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
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

