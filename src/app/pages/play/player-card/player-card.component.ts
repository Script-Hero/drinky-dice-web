import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})

export class PlayerCardComponent implements OnInit {
  @Input("numDice") numDice;
  @Input("curNum") curNum;
  @Input("playerName") playerName;
  @Input("loser") loser;
  @Input("color") color;

  constructor() { }

  ngOnInit() {
    console.log(this.loser)
  }

}
