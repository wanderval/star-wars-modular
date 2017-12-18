import { UtilsService } from './../utils.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() title: string;
  @Input() items: any[];
  @Input() apiName: string;
  reverse: boolean = false;

  constructor(private _utilsService: UtilsService) {}

  sortAsc() {
    if(this.reverse) {
      this.reverse = false;
    }
  }

  sortDesc() {
    if(!this.reverse) {
      this.reverse = true;
    }
  }

  getIdFromUrl(item: any): number {
    console.log('teste');
    let id = this._utilsService.retrieveIdFromUrl(item.url, this.apiName);
    console.log('ID:', id);
    return id;
  }

}
