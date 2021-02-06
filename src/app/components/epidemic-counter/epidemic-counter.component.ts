import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faDisease } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-epidemic-counter',
  templateUrl: './epidemic-counter.component.html',
  styleUrls: ['./epidemic-counter.component.css'],
})
export class EpidemicCounterComponent implements OnInit {
  constructor() {}
  @Output() public epidemicDrawn: EventEmitter<any> = new EventEmitter();
  sliderValue: number = 0;
  faDisease = faDisease;

  onSliderChange(sliderChange: any) {
    this.sliderValue = sliderChange.value;
    this.epidemicDrawn.emit(sliderChange.value);
  }

  ngOnInit() {}
}
