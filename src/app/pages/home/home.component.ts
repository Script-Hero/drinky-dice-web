import { Component, OnInit} from '@angular/core';
import { GameSaveService } from '../../game-save.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Save : GameSaveService, private router : Router) { }

  ngOnInit() {
  }

  newGame(){
    this.Save.clearGameSave();
    this.router.navigate(['/new']);
  }

  continueGame(){
    if(this.Save.getGameSave().players.length < 1){
      alert("You must start a game before you can play.")
    }else {
      this.router.navigate(['/play'])
    }
  }

  goAbout(){
    this.router.navigate(['/about'])
  }

}
