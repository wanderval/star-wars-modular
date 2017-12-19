import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterRoutingModule } from './character.routing.module';

@NgModule({
    declarations: [ CharacterComponent, CharacterDetailComponent ],
    imports: [ CommonModule, SharedModule, HttpModule, CharacterRoutingModule],
    exports: [ CharacterComponent, CharacterDetailComponent ],
    providers: [ CharacterService ]
})
export class CharacterModule {}
