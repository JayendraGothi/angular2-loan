import {Component} from '@angular/core';
import {Company} from "../../models/company";
import {slideInOutAnimation} from "../../_animations/slide-in";


/**
 * summary component
 * show complete summary.
 */
@Component({
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.css'],
  animations: [slideInOutAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class SummaryComponent {

  /**
   * selected company
   */
  company: Company;

  /**
   * amounts
   */
  amounts: Object;

  /**
   * user object
   */
  user: Object;

  /**
   * Summary Constructor
   * initialize all the variables
   */
  constructor() {

    // get personal details
    let user = localStorage.getItem("user");
    if (user != "undefined" && user !== null && user !== "null") {
      this.user = JSON.parse(user);
    }

    // get personal details
    let company = localStorage.getItem("company");
    if (company != "undefined" && company !== null && company !== "null") {
      this.company = JSON.parse(user);
    }

    // get personal details
    let amounts = localStorage.getItem("amounts");
    if (amounts != "undefined" && amounts !== null && amounts !== "null") {
      this.amounts = JSON.parse(amounts);
    }
  }
}
