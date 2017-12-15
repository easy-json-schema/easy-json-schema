
import test from 'ava'
import ejs from './index.js'

test('json1', t=>{
  const test1 = {
    "*id": 'string',
    "*name": {
      type: 'string',
      enum: ['tom', 'jay'],
      minLength: 1,
      maxLength: 10
    },
    "*images": [{
      "*id": 'number',
      names: {
        type: 'array',
        title: 'Images Collections.',
        items: {
          "*id": 'string',
          "*name": 'string'
        }
      }
    }],
    abc: {
      a: {
        x: 'string',
        y: {
          type: 'number',
          minimum: 400000,
          maximum: 900000
        }
      }
    }
  }

  const result1 = {
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

  t.deepEqual(ejs(test1), result1);
})

test('item is number', t=>{
  const test2 ={
    "*id": "number",
    "role": {
      "type": "string",
      "enum": ["owner", "dev", "guest"]
    },
    "*member_uids": {
      "type": "array",
      "items": "number",
      "minItems": 1
    }
  }
  const result2 = {
    "type": "object",
    "required": [
      "id",
      "member_uids"
    ],
    "properties": {
      "id": {
        "type": "number"
      },
      "role": {
        "type": "string",
        "enum": [
          "owner",
          "dev",
          "guest"
        ]
      },
      "member_uids": {
        "type": "array",
        "minItems": 1,
        "items": {
          "type": "number"
        }
      }
    }
  }
  t.deepEqual(ejs(test2), result2);
})