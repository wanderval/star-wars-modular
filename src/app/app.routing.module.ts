import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'character', loadChildren: 'app/character/character.module#CharacterModule' },
    { path: 'starship', loadChildren: 'app/starship/starship.module#StarshipModule' },
    { path: '', component: HomeComponent }
];
@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}