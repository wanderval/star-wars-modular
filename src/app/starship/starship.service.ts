import { Character } from './../character/character';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from "rxjs/operators/mergeMap";
import { forkJoin } from"rxjs/observable/forkJoin";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Starship } from '../starship/starship';
import { ErrorHandler } from '../app.error-handler';


@Injectable()
export class StarshipService {

    private url = 'https://swapi.co/api/starships';

    constructor(private _http: Http) {}

    private convertUrlIntoPromise(urls:string[]){
        return urls.map(url => this._http.get(url));
    };

    getStarships(): Observable<Starship[]> {
        return this._http
        .get(this.url)
        .map((response: Response) => response.json().results)
        .catch(ErrorHandler.handlerError);
    }

    getStarshipById(id: number): Observable<Starship> {
        return this._http
        .get(this.url+'/'+id)
        .map((response: Response) => response.json())
        .catch(ErrorHandler.handlerError);
    }

    getDetails(id: number) {

        return this._http.get(this.url+'/'+id)
        .pipe(
            mergeMap( (starship: Response) => {
                let pilotPromisses = this.convertUrlIntoPromise(starship.json().pilots);
                return forkJoin(pilotPromisses).map( result => {
                    const pilots: Character[] = result.map(result => result.json());
                    return pilots;
                });
            }))
            .catch(ErrorHandler.handlerError);
    }

}
