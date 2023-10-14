import { catchError, of, throwError } from "rxjs";

/**
 * Purpose for this operator ✋
 * I use 'https://dummyjson.com' for the CRUD operations and it is not acualy save any POST request
 * So any PUT or DELETE request on a POSTed request will give a 404 error
 * This operator for safely pass this error
 */

export const handleNotFoundIds = () => {
    return catchError(error => {
        if (error.status === 404 && error.url.indexOf('todos') > -1) {
            return of({});
        }
        return throwError(() => error);
    })
}