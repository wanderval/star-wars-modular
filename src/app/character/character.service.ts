import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Character } from './character';
import { ErrorHandler } from '../app.error-handler';


@Injectable()
export class CharacterService {

    private url = 'https://swapi.co/api/people';

    constructor(private _http: Http) {}
    getCharacters(): Observable<Character[]> {
        return this._http
            .get(this.url)
            .map((response: Response) => response.json().results)
            .catch(ErrorHandler.handlerError);
    }

    getCharacter(id: number): Observable<Character> {
        console.log(this.url +'/' + id + '/');
        return this._http
        .get(this.url +'/' + id)
        .map((response: Response) => response.json())
        .catch(ErrorHandler.handlerError);
    }

}
