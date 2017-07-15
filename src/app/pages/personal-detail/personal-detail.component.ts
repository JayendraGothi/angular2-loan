import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import * as moment from "moment";
import {slideInOutAnimation} from "../../_animations/slide-in";

@Component({
  selector: 'personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css'],
  animations: [slideInOutAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})
export class PersonalDetailComponent {

  /**
   * flag for form submission by user
   *
   * @type {boolean}
   */
  public form_submitted: boolean = false;

  /**
   * customer form
   *
   * @type {void|FormGroup}
   */
  public form = this._fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    mobile: ["", [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]+$")]],
    dob: ["", Validators.required]
  });

  /**
   * Personal Detail Constructor
   *
   * @param _router
   * @param _fb
   */
  constructor(public _router: Router, public _fb: FormBuilder) {
    this.dateChanged(moment().format('DD MMMM YYYY'));
  }

  /**
   * date of birth changed
   */
  dateChanged(date) {
    this.form.patchValue({dob: date});
  }

  /**
   * Save personal details
   */
  save() {
    this._router.navigate(['/home/occupation']);
    // this.form_submitted = true;
    // if (this.form.valid) {
    //   let data = Object.assign({}, this.form.value);
    //   localStorage.setItem("user", JSON.stringify(data));
    //   this._router.navigate(['/home/occupation']);
    // }
  }
}
