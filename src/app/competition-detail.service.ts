import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CompetitionDetailService {
  constructor(private http: Http) { }
  getCompetitions(): Observable<Response> {
    return this.http.get('http://api.football-data.org/v1/competitions')
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
