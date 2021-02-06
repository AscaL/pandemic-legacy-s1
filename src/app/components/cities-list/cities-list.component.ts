import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { City } from '../../cities';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],
})
export class CitiesListComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  @Input() citiesList: Array<City> = [];
  @Input() turn: number = 0;
  @Output() public cardDrawn: EventEmitter<City> = new EventEmitter();
  cityIcon = faCity;
  changelog: Array<string> = [];

  ngOnInit() {
    this.sortCityByName(this.citiesList);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changelog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  onCardDrawn(evt: any) {
    const removedCity = _.remove(this.citiesList, [
      'name',
      evt.target.innerText,
    ])[0];
    this.cardDrawn.emit(removedCity);
  }

  sortCityByName(cities: Array<City>) {
    this.citiesList = _.sortBy(cities, 'name');
  }
}
