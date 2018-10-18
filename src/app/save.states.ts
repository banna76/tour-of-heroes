import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero';

@Injectable({
    providedIn: 'root'
  })
export class SaveStates {
  heroes: Hero[];

  private saveHeroes = new BehaviorSubject(this.heroes);
  
  currentHeroes = this.saveHeroes.asObservable();

  constructor() { 
   // console.log(this.heroes);
  }

  changeHeroes(heroes: Hero[]) {
    this.saveHeroes.next(heroes)
  }

}