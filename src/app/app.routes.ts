import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// base component
import {BaseComponent} from "./pages/base/base/base.component";

// pages
import {PersonalDetailComponent} from "./pages/personal-detail/personal-detail.component";
import {OccupationDetailComponent} from "./pages/occupation-detail/occupation-detail.component";
import {LoanDetailComponent} from "./pages/loan-detail/loan-detail.component";
import {SummaryComponent} from "./pages/summary/summary.component";

// Route Configuration
export const routes: Routes = [{
  path: '',
  component: BaseComponent,
  children: [{
    path: 'home',
    children: [{
      path: '',
      component: PersonalDetailComponent
    }, {
      path: 'occupation',
      component: OccupationDetailComponent
    }, {
      path: 'loan',
      component: LoanDetailComponent
    }, {
      path: 'summary',
      component: SummaryComponent
    }]
  }]
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
