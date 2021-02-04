import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  Cities,
  City,
} from '/Users/emanueleorfanelli/Documents/repos/pandemic-legacy-s1/src/app/cities';

@Component({
  selector: 'app-pandemic-game',
  templateUrl: './pandemic-game.component.html',
  styleUrls: ['./pandemic-game.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class PandemicGameComponent implements OnInit {
  changelog: any;
  constructor(private cd: ChangeDetectorRef) {}
  citiesT0: Array<City> = [];
  citiesT1: Array<City> = [];
  citiesT2: Array<City> = [];
  citiesT3: Array<City> = [];
  citiesT4: Array<City> = [];
  citiesT5: Array<City> = [];
  epidemicCounter: number = 0;

  ngOnInit() {
    this.citiesT0 = Cities;
    // undo con prev changes fattibile!!
  }

  onEpidemicDrawn(epidemicLevel: number) {
    this.epidemicCounter = epidemicLevel;
  }

  onCardDrawn(city: City) {
    if (city === undefined) {
      return;
    }
    switch (this.epidemicCounter) {
      case 0:
        this.citiesT1.push(city);
        this.citiesT1 = this.citiesT1.map((el) => Object.assign({}, el));
        break;
      case 1:
        this.citiesT2.push(city);
        this.citiesT2 = this.citiesT2.map((el) => Object.assign({}, el));
        break;
      case 2:
        this.citiesT3.push(city);
        this.citiesT3 = this.citiesT3.map((el) => Object.assign({}, el));
        break;
      case 3:
        this.citiesT4.push(city);
        this.citiesT4 = this.citiesT4.map((el) => Object.assign({}, el));
        break;
      case 4:
        this.citiesT5.push(city);
        this.citiesT5 = this.citiesT5.map((el) => Object.assign({}, el));
        break;
    }
  }
}
