import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PlayComponent } from './pages/play/play.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'new', component : NewComponent},
  {path : 'play', component : PlayComponent},
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'drinky-dice', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
