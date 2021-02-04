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

  onEpidemicDrawn(epidemicLevel: number) {
    console.log(
      '🚀 ~ PandemicGameComponent ~ onEpidemicDrawn ~ evt',
      epidemicLevel
    );
  }

  ngOnInit() {}
}
