import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameSaveService } from '../../game-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
  //encapsulation : ViewEncapsulation.None

})
export class PlayComponent implements OnInit {
  players = [];
  save;
  constructor(private Save : GameSaveService, private router : Router) { }

  ngOnInit() {
    this.save = this.Save.getGameSave();
    this.players = this.save.players;

    if(this.players.length < 1){
      alert("Add players before continuing.")
      this.router.navigate(['/new'])
    }
  }

  roll(n) {
    var t = 0;
    for(var i = 0; i < n; i++){
      t += Math.floor((Math.random() * 6) + 1);
  }

    return t;
  }


  rollButton() {
    var checker = {smallest : Infinity, index : null};

    for(var pIndex = 0; pIndex < this.players.length; pIndex++){
      let p = this.players[pIndex];
      let t = this.roll(p.dice);
      if(t < checker.smallest){
        checker.index = pIndex;
        checker.smallest = t;
      }
      this.players[pIndex].currentNumber = t;
      this.players[pIndex].loser = false;
    }

    this.players[checker.index].dice += 1;
    this.players[checker.index].loser = true;
    this.Save.setGameSave({roundNumber : this.Save.getGameSave().roundNumber + 1, players : this.players, colors_used : this.save.colors_used});

  }

}
