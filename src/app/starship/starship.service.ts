import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Starship } from '../starship/starship';
import { ErrorHandler } from '../app.error-handler';


@Injectable()
export class StarshipService {

    private url = 'https://swapi.co/api/starships';

    constructor(private _http: Http) {}
    getStarships(): Observable<Starship[]> {
        return this._http
        .get(this.url)
        .map((response: Response) => response.json().results)
        .catch(ErrorHandler.handlerError);
    }

    getStarshipById(): Observable<Starship> {
        return this._http
        .get(this.url)
        .map((response: Response) => response.json().results)
        .do(response => console.log('Unique starship: ' + JSON.stringify(response)))
        .catch(ErrorHandler.handlerError);
    }

}
