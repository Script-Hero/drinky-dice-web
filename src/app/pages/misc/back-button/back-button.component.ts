import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  @Input("href") href;
  constructor(private router : Router, private location : Location) { }

  ngOnInit() {
  }

  transport() {
    if(this.href){
      this.router.navigate([this.href]);
    }else {
      this.location.back();
    }
  }

}
