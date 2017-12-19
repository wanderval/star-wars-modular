import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterService } from './character/character.service';
import { UtilsService } from './shared/utils.service';

import { routing } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CharacterModule } from './character/character.module';
import { StarshipModule } from './starship/starship.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    CharacterModule,
    StarshipModule,
    HomeModule
  ],
  providers: [
    CharacterService,
    // StarshipService
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
