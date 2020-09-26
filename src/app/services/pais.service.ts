import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pais } from '../classes/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private countriesUrl = 'http://restcountries.eu/rest/v2';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.countriesUrl);
  }
}
