
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'http://check.getipintel.net',

    auth: {
      prefix: 'Bearer',
    },

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
          "active": true,
          "name": "contact",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "query_flag",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "query_format",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "query_ip",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "result",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        }
      ],
      "name": "check",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "your.email@example.com",
                    "kind": "query",
                    "name": "contact",
                    "orig": "contact",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "m",
                    "kind": "query",
                    "name": "flag",
                    "orig": "flag",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "8.8.8.8",
                    "kind": "query",
                    "name": "ip",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "b",
                    "kind": "query",
                    "name": "oflag",
                    "orig": "oflag",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/check.php",
              "parts": [
                "check.php"
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
              "index$": 0
            }
          ],
          "key$": "load"
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
  config
}

