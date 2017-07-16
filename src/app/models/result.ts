import {Company} from "./company";
import {Form} from "./form";


export class Result {
  /**
   * list of companies to display
   *
   * @type {Array}
   */
  companies: Company[] = [];

  /**
   * user form structure
   */
  userForm: Form;
}
