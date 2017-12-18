import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  imports: [],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    HomeCardComponent
  ]
})
export class HomeModule { }
