import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// base of app
import {AppComponent} from './app.component';

// route file
import {routing} from "./app.routes";

// base component
import {BaseComponent} from "./pages/base/base/base.component";

// page components
import {PersonalDetailComponent} from "./pages/personal-detail/personal-detail.component";
import {OccupationDetailComponent} from "./pages/occupation-detail/occupation-detail.component";
import {LoanDetailComponent} from "./pages/loan-detail/loan-detail.component";

// common components
import {DatePickerComponent} from "./pages/common/date-picker/date-picker.component";
import {CompanyAutoCompleteComponent} from "./pages/common/company-auto-complete/company-auto-complete.component";
import {SummaryComponent} from "./pages/summary/summary.component";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PersonalDetailComponent,
    OccupationDetailComponent,
    LoanDetailComponent,
    SummaryComponent,

    DatePickerComponent,
    CompanyAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
