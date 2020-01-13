# Motivation
Angular guys did a great work by publishing the [hero-tours](https://stackblitz.com/angular/ybbdbroqogm) example app.  
Yet there are some angular features which (for my opinion) left uncovered  
Motivation behind this repo is - to give some more examples for some addtional angular features by implementing them in this repo.

## Nested Routes
To the original example hero`s data i have added "deeds" field, where i put records of deeds of this particular hero. some of them good and some - bad

```json
[
  {
    "name": "Dr Nice",
    "deeds": [
      {
        "id": 1,
        "desc": "saved puppy",
        "type": "good"
      },
      {
        "id": 2,
        "desc": "saved kitten",
        "type": "good"
      }
    ]
  },
  {
    "id": 12,
    "name": "Narco",
    "deeds": [
      {
        "id": 3,
        "desc": "drived at 180kph",
        "type": "bad"
      }
    ]
  }
]
```
On a 'hero-details' page you have a nested 'deeds' route where you can see the deeds of the hero (and decide whether this hero should get present if you are Santa)