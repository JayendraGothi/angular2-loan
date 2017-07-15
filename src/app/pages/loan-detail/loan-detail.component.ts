import {Component} from '@angular/core';
import {Router} from "@angular/router";
declare let jQuery: any;
import {slideInOutAnimation} from "../../_animations/slide-in";


@Component({
  selector: 'loan-detail',
  templateUrl: 'loan-detail.component.html',
  styleUrls: ['loan-detail.component.css'],
  animations: [slideInOutAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class LoanDetailComponent {

  /**
   * initializing loan and emi values
   * @type {number}
   */
  public loan_amount: number = 0;
  public emi_amount: number = 0;

  /**
   * errors
   */
  public error = {
    loan: "",
    emi: ""
  };

  /**
   * Personal Detail Constructor
   *
   * @param _router
   */
  constructor(public _router: Router) {
  }

  /**
   * Loan Detail Constructor
   * initializing range slider
   */
  ngOnInit() {
    let self = this;

    // loan range slider initialization
    jQuery('#loan').rangeslider({
      polyfill: false,
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',
      // Callback function
      onSlide: function (position, value) {
        self.loan_amount = value;
      }
    });
    jQuery('#loan').val(0).change();

    // emi range slider initialization
    jQuery('#emi').rangeslider({
      polyfill: false,
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',
      // Callback function
      onSlide: function (position, value) {
        self.emi_amount = value;
      }
    });
    jQuery('#emi').val(0).change();
  }

  /**
   * save loan and emi amount
   */
  save() {
    if (this.validate()) {
      localStorage.setItem("amounts", JSON.stringify({
        loan_amount: this.loan_amount,
        emi_amount: this.emi_amount
      }));
      this._router.navigate(['/home/summary']);
    }
  }

  /**
   * validate data
   * check the loan and emi amount should not be zero
   *
   * @returns {boolean}
   */
  validate() {
    this.error = {
      loan: "",
      emi: ""
    };
    if (this.loan_amount == 0 || this.emi_amount == 0) {
      if (this.loan_amount == 0)
        this.error.loan = "Loan amount cannot be zero";
      if (this.emi_amount == 0)
        this.error.emi = "Emi amount cannot be zero";
      return false;
    }
    return true;
  }
}
