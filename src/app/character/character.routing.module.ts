import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


const characterRoutes: Routes = [
    { path: '', component: CharacterComponent },
    { path: ':id', component: CharacterDetailComponent }
];
@NgModule({

    imports: [RouterModule.forChild(characterRoutes)],
    exports: [RouterModule]

})

export class CharacterRoutingModule {}
