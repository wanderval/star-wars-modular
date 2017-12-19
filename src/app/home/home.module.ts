import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  declarations: [ HomeComponent, HomeCardComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ HomeComponent, CommonModule, RouterModule ]
})
export class HomeModule { }
