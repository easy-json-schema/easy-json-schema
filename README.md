# easy-json-schema
A succinct json-schema language, Convert json into json-schema.

## install
npm install easy-json-schema

## example

### Base 
Input:

```
{
  "id": "uk123",
  "*name": "tom",
  "*email": "tom@gmail.com",
  "arr": [
    {
      "site": "string",
      "url": "string"
    }
  ]
}

```

Ouput:

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