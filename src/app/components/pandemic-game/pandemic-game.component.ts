import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Cities, City } from '../../cities';
import * as _ from 'lodash';

@Component({
  selector: 'app-pandemic-game',
  templateUrl: './pandemic-game.component.html',
  styleUrls: ['./pandemic-game.component.css'],
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
  deckSize: number = 0;
  newArrayLen: number = 0;
  allCities: any = [];

  ngOnInit() {
    this.citiesT0 = _.sortBy(Cities, 'name');
    this.allCities.push(
      this.citiesT0,
      this.citiesT1,
      this.citiesT2,
      this.citiesT3,
      this.citiesT4,
      this.citiesT5
    );
    // undo con prev changes fattibile!!
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      console.log('🚀 ~ PandemicGameComponent ~ ngOnChanges ~ cur', cur);
      const prev = JSON.stringify(chng.previousValue);
      console.log('🚀 ~ PandemicGameComponent ~ ngOnChanges ~ prev', prev);
      this.changelog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  onEpidemicDrawn(epidemicLevel: number) {
    console.log(this.changelog);
    this.epidemicCounter = epidemicLevel;
    switch (epidemicLevel) {
      case 1:
        this.newArrayLen = this.allCities[1].length;
        break;
      case 2:
        this.newArrayLen = this.allCities[2].length;
        break;
      case 3:
        this.newArrayLen = this.allCities[3].length;
        break;
      case 4:
        this.newArrayLen = this.allCities[4].length;
        break;
      case 5:
        this.newArrayLen = this.allCities[5].length;
        break;
    }
  }

  changeProbabilityDeckIfEmpty(
    AllCitiesArray: Array<Array<City>>,
    epiCoutner: number
  ): number {
    if (AllCitiesArray[0].length === 0) {
      return 0;
    } else if (AllCitiesArray[epiCoutner].length === 0) {
      return this.changeProbabilityDeckIfEmpty(AllCitiesArray, epiCoutner - 1);
    } else {
      return AllCitiesArray[epiCoutner].length;
    }
  }

  setDeckSize(size: number) {
    this.deckSize = size;
  }

  onCardDrawn(city: City) {
    if (city === undefined) {
      return;
    }
    switch (this.epidemicCounter) {
      case 0:
        this.allCities[1].push(city);
        this.allCities[1] = this.allCities[1].map((el: any) =>
          Object.assign({}, el)
        );
        break;
      case 1:
        this.allCities[2].push(city);
        this.allCities[2] = this.allCities[2].map((el: any) =>
          Object.assign({}, el)
        );
        break;
      case 2:
        this.allCities[3].push(city);
        this.allCities[3] = this.allCities[3].map((el: any) =>
          Object.assign({}, el)
        );
        break;
      case 3:
        this.allCities[4].push(city);
        this.allCities[4] = this.allCities[4].map((el: any) =>
          Object.assign({}, el)
        );
        break;
      case 4:
        this.allCities[5].push(city);
        this.allCities[5] = this.allCities[5].map((el: any) =>
          Object.assign({}, el)
        );
        break;
    }
  }
}
