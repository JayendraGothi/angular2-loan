import {Component, Output, EventEmitter} from "@angular/core";
import {Company} from "../../../models/company";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Result} from "../../../models/result";
declare let jQuery: any;

/**
 * Company auto complete
 * It helps to search company
 *
 * E.g. <company-auto-complete></company-auto-complete>
 */
@Component({
  selector: 'company-auto-complete',
  templateUrl: 'company-auto-complete.component.html',
  styleUrls: ['company-auto-complete.component.css'],
})
export class CompanyAutoCompleteComponent {

  /**
   * list of companies from server
   *
   * @type {Array}
   */
  private companies: Company[] = [];

  /**
   * selected Company
   */
  company: Company;

  /**
   * list of selected companies after applying the filter
   *
   * @type {Array}
   */
  selectedCompanies: Company[] = [];

  /**
   * query string value
   * and query string getter
   */
  _query: string = "";
  get query() {
    return this._query;
  }

  /**
   * setter for query string
   * @param query
   */
  set query(query: string) {
    this._query = query;
    this.search();
  }

  /**
   * Date changed emitter
   */
  @Output()
  onCompanyChanged = new EventEmitter();

  /**
   * CompanyAutoComplete Constructor
   *
   * @param http
   */
  constructor(private http: Http) {
  }

  /**
   * get companies from server on load of component
   *
   * @returns {Observable<Result>}
   */
  public ngOnInit() {
    this.fetch().subscribe(
      response => {
        this.companies = response.companies.map(company => new Company(company));
      },
      err => {

      }
    );
  }

  /**
   * fetch companies from server
   *
   * @returns {Observable<Result>}
   */
  fetch(): Observable<Result> {
    return this.http.get("./assets/companies.json")
      .map((res: Response) => {
        return res.json();
      }).catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error')
      })
  }


  /**
   * on change of input field.
   * Search for the company with similar names
   */
  search() {
    this.selectedCompanies = this.companies.filter(company => {
      return company.name.toLowerCase().indexOf(this._query.toLowerCase()) > -1;
    });
  }

  /**
   * when user click on company send company details to parent component
   * @param company
   */
  companySelected(company: Company) {
    this.onCompanyChanged.emit(company);
    this.company = company;
    this._query = company.name;
    this.selectedCompanies = [];
  }
}
