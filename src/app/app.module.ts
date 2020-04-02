import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PlayComponent } from './pages/play/play.component';
import { PlayerCardComponent } from './pages/play/player-card/player-card.component';
import { DiceSvgComponent } from './pages/home/dice-svg/dice-svg.component';
import { BackButtonComponent } from './pages/misc/back-button/back-button.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    PlayComponent,
    PlayerCardComponent,
    DiceSvgComponent,
    BackButtonComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
