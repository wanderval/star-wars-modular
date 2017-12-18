import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { FilterByName } from './filter-by-name.pipe';
import { SortPipe } from './sort.pipe';
import { routing } from './../app-routing.module';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ ListComponent, FilterByName, SortPipe ],
    exports: [ ListComponent ]
})
export class SharedModule {}
