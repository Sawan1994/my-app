import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { StandingsDetailService } from './standings-detail.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'standing-detail',
  templateUrl: './standings-detail.component.html'
})
export class StandingsDetailComponent implements OnInit {
  standingsObject: Object;
  standingsArray: Array<Object>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private standingsDetailService: StandingsDetailService) {
  }

  ngOnInit() {
    this.route.paramMap
    .map((params: ParamMap) => this.setStandingsList(Number(params.get('id'))));

  }
  setStandingsList(id: number) {
    this.standingsDetailService.getStandingsData(id)
    .subscribe( (data: any) => {
      this.standingsObject = data;
      this.standingsArray = data['standing'];
    });
  }
}
