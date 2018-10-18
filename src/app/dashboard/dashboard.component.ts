import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SaveStates } from "../save.states";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  savedHeroes:Hero[];

  constructor(
    private heroService: HeroService,
    private data: SaveStates
    ){}

  ngOnInit() {
    this.getHeroes();
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        let random = this.getRandomInt(heroes.length)
        this.heroes = heroes.slice(random, random+4)
        this.savedHeroes =  heroes.slice(random, random+4)
        this.data.changeHeroes(this.savedHeroes)
      });
  }

}
