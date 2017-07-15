import {Component} from "@angular/core";
import {Company} from "../../models/company";
import {Router} from "@angular/router";
import {slideInOutAnimation} from "../../_animations/slide-in";

@Component({
  selector: 'occupation-detail',
  templateUrl: 'occupation-detail.component.html',
  styleUrls: ['occupation-detail.component.css'],
  animations: [slideInOutAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class OccupationDetailComponent {

  /**
   * error message
   *
   * @type {string}
   */
  error: string = "";

  /**
   * selected company
   */
  company: Company;

  /**
   * Occupation Detail Constructor
   *
   * @param _router
   */
  constructor(public _router: Router) {
  }

  /**
   * company changed callback
   *
   * @param company
   */
  companyChanged(company) {
    this.company = company;
  }

  /**
   * save occupation details
   */
  save() {
    if (this.company) {
      localStorage.setItem("company", JSON.stringify(this.company));
      this._router.navigate(['/home/loan']);
    } else
      this.error = "Company is Required";
  }
}
