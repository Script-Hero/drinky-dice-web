import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { GameSaveService } from 'src/app/game-save.service';
import { ViewEncapsulation } from '@angular/core';
import {  DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  game;
  players = [];
  @ViewChild('box') inputBox: ElementRef;
  overflowValue:string = 'hidden';
  constructor(private Save : GameSaveService, private router : Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.game = this.Save.getGameSave();
    this.players = this.game.players;
    //this.document.body.style.overflowY = 'hidden';
  }

  onSubmit(value){
    if(value.trim() !== ''){
      if(value.trim().length > 10){
        alert("No names less than 10 characters.");
        this.inputBox.nativeElement.value = '';
      }
      else if(this.players.length + 1 > 6){
        alert("Player limit reached");
        this.inputBox.nativeElement.value = '';
      }else {
        this.Save.createPlayer(value);
        this.players = this.Save.getGameSave().players;
        this.inputBox.nativeElement.value = '';

        this.overflowValue = this.players.length > 4 ? 'scroll' : 'hidden';

        //this.document.body.style.overflowY = this.overflowValue;
      }
    }
  }

  play(){
    this.router.navigate(['/play']);
  }

}
