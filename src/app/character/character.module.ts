import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
//import { routing } from './../app-routing.module';


@NgModule({
    declarations: [ CharacterComponent, CharacterDetailComponent ],
    exports: [ CharacterComponent, CharacterDetailComponent  ],
    imports: [ SharedModule, HttpModule],
    providers: [ CharacterService ]
})
export class CharacterModule {}
