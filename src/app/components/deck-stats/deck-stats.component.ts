import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-stats',
  templateUrl: './deck-stats.component.html',
  styleUrls: ['./deck-stats.component.css'],
})
export class DeckStatsComponent implements OnInit {
  constructor() {}
  @Input() deckSize: number = 0;
  epidemicChance: number = 0;
  cityDrawChance: number = 0;

  onEpidemicDrawn(epidemicLevel: any) {}

  onCardDrawn() {
    this.calculateEpidemicChance();
  }

  calculateEpidemicChance() {}

  calculateCityDrawChance(citiesDrawn: number, epidemicLevel: number) {
    switch (epidemicLevel) {
      case 0: {
        this.cityDrawChance =
          Math.round(((2 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
      case 1: {
        this.cityDrawChance =
          Math.round(((2 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
      case 2: {
        this.cityDrawChance =
          Math.round(((2 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
      case 3: {
        this.cityDrawChance =
          Math.round(((3 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
      case 4: {
        this.cityDrawChance =
          Math.round(((3 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
      case 5: {
        this.cityDrawChance =
          Math.round(((3 / citiesDrawn) * 100 + Number.EPSILON) * 100) / 100;
        break;
      }
    }
  }

  ngOnInit() {}
}
