import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export const api = 'https://api.opendota.com/api';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<any> {
    return this.http.get(`${api}/constants/heroes`).pipe(
      map((data: any) => Object.keys(data).map(key => data[key]))
    );
  }
}
