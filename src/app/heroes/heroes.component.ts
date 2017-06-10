import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
templateUrl: './app/heroes/heroes.component.html',
  styleUrls: ['./app/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService){

  }

  ngOnInit(): void {
    this.getHeroes();
    console.log('component initialized');
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}