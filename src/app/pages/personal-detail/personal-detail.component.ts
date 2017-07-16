import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from "moment";
import {slideInOutAnimation} from "../../_animations/slide-in";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Result} from "../../models/result";
import {Form} from "../../models/form";

@Component({
  selector: 'personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css'],
  animations: [slideInOutAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: {'[@slideInOutAnimation]': ''}
})
export class PersonalDetailComponent {

  /**
   * flag for form submission by user
   *
   * @type {boolean}
   */
  public form_submitted: boolean = false;

  /**
   * form
   *
   * @type {void|FormGroup}
   */
  form: FormGroup;

  /**
   * form structure
   */
  structure: Form;

  /**
   * Personal Detail Constructor
   *
   * @param _router
   * @param _fb
   * @param http
   */
  constructor(private _router: Router, private _fb: FormBuilder, private http: Http) {
  }

  /**
   * get companies from server on load of component
   *
   * @returns {Observable<Result>}
   */
  public ngOnInit() {
    this.fetch().subscribe(
      response => {

        // get form
        let form = new Form(response.userForm);
        this.structure = form;

        // prepare form group
        let form_object = {};
        for (let field in form.fields) {
          let validation_array = [""];
          validation_array.push(form.fields[field].validation_array());
          form_object[field] = validation_array;
        }

        // initialize form
        this.form = this._fb.group(form_object);
        this.dateChanged(moment().format('DD MMMM YYYY'));
      },
      err => {

      }
    );
  }

  /**
   * fetch user form structure from json
   *
   * @returns {Observable<Result>}
   */
  fetch(): Observable<Result> {
    return this.http.get("./assets/user-form.json")
      .map((res: Response) => {
        return res.json();
      }).catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error')
      })
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
    console.log(this.form.value);
    this.form_submitted = true;
    if (this.form.valid) {
      let data = Object.assign({}, this.form.value);
      localStorage.setItem("user", JSON.stringify(data));
      this._router.navigate(['/home/occupation']);
    }
  }
}
