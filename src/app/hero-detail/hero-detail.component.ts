import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../services/hero.service';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/hero-detail/hero-detail.component.html',
  styleUrls: ['./app/hero-detail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
   @Input() hero: Hero;

   constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location,
                private titleService: Title){

                }
    ngOnInit(): void {


  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => {this.titleService.setTitle(hero.name);
                        this.hero = hero; });

}
goBack(): void {
  this.location.back();
}

  save(): void {
    this.heroService.update(this.hero).then(()=> this.goBack());
  }
}