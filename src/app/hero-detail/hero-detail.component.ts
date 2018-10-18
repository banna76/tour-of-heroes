import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

import { SaveStates } from "../save.states";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero: Hero;
  saveHero: Hero[];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private saveData: SaveStates
  ) {}
 
  ngOnInit(): void {
    this.getHero();
    this.saveData.currentHeroes.subscribe(hero => this.saveHero = hero)
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
 
}