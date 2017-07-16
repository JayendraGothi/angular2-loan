import {Company} from "./company";
import {Form} from "./form";

/**
 * Result Model
 * All the server results are saved in this model
 */
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
