import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
