import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name = 'ironman';
  age = 45;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    return (this.name = 'Spiderman');
  }
  changeAge() {
    return (this.age = 25);
  }
}
