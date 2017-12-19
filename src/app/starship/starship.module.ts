import { NgModule } from '@angular/core';
import { StarshipComponent } from './starship.component';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { StarshipService } from './starship.service';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

@NgModule({
    declarations: [ StarshipComponent, StarshipDetailComponent ],
    exports: [ StarshipComponent ],
    imports: [ SharedModule, HttpModule ],
    providers: [ StarshipService ]
})
export class StarshipModule {}
