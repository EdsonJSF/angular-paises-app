import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/';
  private apiUrlVersion: string = 'v3.1';
  private apiUrlOldVersion: string = 'v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.apiUrlVersion}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.apiUrlOldVersion}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.apiUrlVersion}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  verPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.apiUrlVersion}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
