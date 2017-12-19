import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { StarshipComponent } from './starship.component';
import { SharedModule } from '../shared/shared.module';
import { StarshipService } from './starship.service';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipRoutingModule } from './starship.routing.module';

@NgModule({
    declarations: [ StarshipComponent, StarshipDetailComponent ],
    imports: [ CommonModule, SharedModule, HttpModule, StarshipRoutingModule ],
    exports: [ StarshipComponent ],
    providers: [ StarshipService ]
})
export class StarshipModule {}
