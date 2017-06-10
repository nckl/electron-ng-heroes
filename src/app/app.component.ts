import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'App',
 template: `
  <h1>{{title}}</h1>
  <div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `
})
export class AppComponent implements OnInit {
 title= 'Tour of Heroes';
 hero: Hero = {
  id: 1,
  name: 'Windstorm'
};

  ngOnInit(): void {
    console.log('component initialized');
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }