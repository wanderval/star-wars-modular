import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { StarshipComponent } from './starship.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


const starshipRoutes: Routes = [
    { path: '', component: StarshipComponent },
    { path: ':id', component: StarshipDetailComponent }
];
@NgModule({

    imports: [RouterModule.forChild(starshipRoutes)],
    exports: [RouterModule]

})

export class StarshipRoutingModule {}
