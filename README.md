# easy-json-schema
A succinct json-schema language, simplify the json-schema definition.

## install
npm install easy-json-schema

## Usage
```
const ejs = require('easy-json-schema');
const jsonSchema = ejs(json);
console.log(jsonSchema);
```
## example

### Base 
Input:

```
{
  "id": "string",
  "*name": "string",
  "*email": "string",
  "arr": [{
    "site": "string",
    "url": "string"
  }]
}

```

Output:

```
{
  "type": "object",
  "required": [
    "name",
    "email"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "arr": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [],
        "properties": {
          "site": {
            "type": "string"
          },
          "url": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

### Advance
Input:

```
{
  "*id": "string",
  "*name": {
    "type": "string",
    "enum": [
      "tom",
      "jay"
    ],
    "minLength": 1,
    "maxLength": 10
  },
  "*images": [
    {
      "*id": "number",
      "names": {
        "type": "array",
        "title": "Images Collections.",
        "items": {
          "*id": "string",
          "*name": "string"
        }
      }
    }
  ],
  "abc": {
    "a": {
      "x": "string",
      "y": {
        "type": "number",
        "minimum": 400000,
        "maximum": 900000
      }
    }
  }
}
```

Output:
```
{
  "type": "object",
  "required": [
    "id",
    "name",
    "images"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "enum": [
        "tom",
        "jay"
      ],
      "minLength": 1,
      "maxLength": 10
    },
    "images": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "number"
          },
          "names": {
            "type": "array",
            "title": "Images Collections.",
            "items": {
              "type": "object",
              "required": [
                "id",
                "name"
              ],
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "abc": {
      "type": "object",
      "required": [],
      "properties": {
        "a": {
          "type": "object",
          "required": [],
          "properties": {
            "x": {
              "type": "string"
            },
            "y": {
              "type": "number",
              "minimum": 400000,
              "maximum": 900000
            }
          }
        }
      }
    }
  }
}
```
