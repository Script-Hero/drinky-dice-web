import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class GameSaveService {
  colors_used = [];
  colors = ['#FF005C', '#6B5B95', '#8EFFD6', '#5fa55a', '#FF5C00', '#f2aeb6'];

  constructor(private Cookie : CookieService) { }

  getGameSave(){
    return JSON.parse(this.Cookie.get("game"));
  }

  setGameSave(save){
    this.Cookie.set("game", JSON.stringify(save));
  }

  clearGameSave(){
    var s = {roundNumber : 0, players : [], colors_used : []};
    this.setGameSave(s);
  }

  addPlayer(player){
    var s = this.getGameSave();
    s.players.push(player);
    this.setGameSave(s);
  }

  updatePlayer(player){
    var s = this.getGameSave();
    var i = -1;
    for(var p of s.players){
      i += 1;
      if(p.name == player.name){
        break
      }
    }

    s.players[i] = player;
    this.setGameSave(s);
  }

  createPlayer(name){
    var template = {name : name, color : this.pickColor(), dice : 1, currentNumber : 0, loser : false}
    this.addPlayer(template);
  }

  pickColor(){
    var save = this.getGameSave();
    while(true){
      let c = this.colors[Math.round(Math.random() * (this.colors.length-1))];
      if(!save.colors_used.includes(c) || save.colors_used.length >= this.colors.length) {
        save.colors_used.push(c)
        this.setGameSave(save);
        return c;
      }
    }
  }

}
