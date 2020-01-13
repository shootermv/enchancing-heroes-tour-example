# Motivation
Angular guys did a great work by publishing the [hero-tours](https://stackblitz.com/angular/ybbdbroqogm) example app.  
Yet there are some angular features which (for my opinion) left uncovered  
Motivation behind this repo is - to give some more examples for some addtional angular features by implementing them in this repo.  


## Commits
Also i tried dedicate special commit for each feature - so you can look at commits and see what exactly i did to implement each functionality.


## Errors or Mistakes
Since im a human(or so i thought until now) - it can happen you may see some mistakes or places for improvements. In such a case - will be happy to have your PRs (pull requests) with fixes/improvents


## Table of Content
- [Demo](https://shootermv.github.io/enchancing-heroes-tour-example/)
- [Nested Routes](#nested-routes)
- [Route Guards](#route-guards)
- [Tests](#tests)
- [Anitmation](#transition-animations)

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
On a 'hero-details' page you have a nested 'deeds' route where you can see the deeds of the hero (and decide whether this hero deserves present if you are Santa)


## Route Guards
Since some heroes are bad - their "deeds" may be bad too. We need to warn users that they may be exposed to some very very shocking stuff.  
That is why i decided to implement warning message before user can see hero dids


## Tests
It is important that every piece of code has a test coverage. actually angular guys did [here](https://stackblitz.com/angular/qyvgpgnvmmr) very good stuff for demostration of tests,  
yet, i will add a little bit more stuff of mine, who knows - may be this will help somebody too...  
run ```ng test``` and you should see some tests running...

## Transition Animations
Since we want our SPA(single page app) to look more modern and cool - animations is "must-to-have"  feature.  
Here i added opacity transition - when navigating between pages the content appears/disappers gradually
