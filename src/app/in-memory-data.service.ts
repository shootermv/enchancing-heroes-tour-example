import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', age:14, deeds:[{id:1, desc:'saved puppy', type: 'good'}, {id:2, desc:'saved kitten', type: 'good'}] },
      { id: 12, name: 'Narco', age:17, deeds:[{id:3, desc:'drived at 180kph', type: 'bad'}] },
      { id: 13, name: 'Bombasto', age:18, deeds:[{id:4, desc:'killed a person', type: 'bad'}, {id:5, desc:'helped a cop', type: 'good'}] },
      { id: 14, name: 'Celeritas', age:24, deeds:[] },
      { id: 15, name: 'Magneta', age:121, deeds:[] },
      { id: 16, name: 'RubberMan', age:14, deeds:[] },
      { id: 17, name: 'Dynama', age:31, deeds:[] },
      { id: 18, name: 'Dr IQ', age:24, deeds:[] },
      { id: 19, name: 'Magma', age:16, deeds:[] },
      { id: 20, name: 'Tornado', age:41, deeds:[] }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/