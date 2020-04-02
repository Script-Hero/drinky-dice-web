import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home'])
  }

}
