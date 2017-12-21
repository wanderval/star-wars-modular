import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  private urlPrefix = 'https://swapi.co/api/';

  retrieveIdFromUrl(url: string, apiName: string): number {
    let id = url;
    id = id.replace(this.urlPrefix + apiName, '');
    id = id.replace('/', '');
    return parseInt(id, 10);
  }

}
