import { NgModule, ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule} from '@angular/router';

import { StarshipComponent } from './starship/starship.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'character', component: CharacterComponent },
    { path: 'character/:id', component: CharacterDetailComponent },
    { path: 'starship', component: StarshipComponent },
    { path: '', component: HomeComponent }
];

/*@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}*/

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

