import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionDetailComponent } from './competition-detail.component';
import { StandingsDetailComponent } from './standings-detail.component';
import { PageNotFoundComponent } from './pageNotFound.component';

const appRoutes: Routes = [
  {
    path: 'competitions',
    component: CompetitionDetailComponent
  },
  {
    path: 'standings/:id',
    component: StandingsDetailComponent
  },
  {
    path: '',
    redirectTo: '/competitions',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
