import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', deeds:[{id:1, desc:'saved puppy', type: 'good'},{id:2, desc:'saved kitten', type: 'good'}] },
      { id: 12, name: 'Narco', deeds:[{id:3, desc:'drived at 180kph', type: 'bad'}] },
      { id: 13, name: 'Bombasto', deeds:[{id:4, desc:'killed a person', type: 'bad'}, {id:5, desc:'helped a cop', type: 'good'}] },
      { id: 14, name: 'Celeritas', deeds:[] },
      { id: 15, name: 'Magneta', deeds:[] },
      { id: 16, name: 'RubberMan', deeds:[] },
      { id: 17, name: 'Dynama', deeds:[] },
      { id: 18, name: 'Dr IQ', deeds:[] },
      { id: 19, name: 'Magma', deeds:[] },
      { id: 20, name: 'Tornado', deeds:[] }
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