import { catchError, of, throwError } from 'rxjs';
import { ENDPOINTS } from '../constants/endpoints.constants';

/**
 * Purpose for this function ✋
 * I use 'https://dummyjson.com' for the CRUD operations and it is not actualy save any POST request
 * So it always return a static id
 * This function generates a new that I can use when POSTing a new resource
 */
export const generateId = () => {
  return new Date().getTime();
};

/**
 * Purpose for this operator ✋
 * I use 'https://dummyjson.com' for the CRUD operations and it is not actualy save any POST request
 * So any PUT or DELETE request on a POSTed request will give a 404 error
 * This operator for safely pass this error
 */
export const handleNotFoundIds = () => {
  return catchError(error => {
    if (error.status === 404 && error.url.indexOf(ENDPOINTS.todos) > -1) {
      return of({});
    }
    return throwError(() => error);
  });
};

/**
 * Purpose for this operator ✋
 * Scroll to top of the page
 */
export const scrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
};
