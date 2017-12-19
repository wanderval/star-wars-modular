import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './component/list/list.component';
import { FilterByName } from './pipe/filter-by-name.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
    declarations: [ ListComponent, FilterByName, SortPipe ],
    imports: [ CommonModule, RouterModule ],
    exports: [ ListComponent, RouterModule ]
})
export class SharedModule {}
