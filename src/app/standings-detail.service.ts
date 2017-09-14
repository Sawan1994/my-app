import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StandingsDetailService {
  constructor(private http: Http) { }

  getStandingsData(id: number): Observable<Response> {
    const url: string = 'http://api.football-data.org/v1/competitions/' + id + '/leagueTable';

    return this.http.get(url)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
