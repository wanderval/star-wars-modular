import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UtilsService } from './shared/service/utils.service';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
// import { CharacterModule } from './character/character.module';
// import { StarshipModule } from './starship/starship.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CharacterModule,
    // StarshipModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
