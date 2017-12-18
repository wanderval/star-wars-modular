import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handlerError(error: Response | any ) {
        let errorMessage: string;
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} as access a URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }

        return Observable.throw(errorMessage);
    }
}
