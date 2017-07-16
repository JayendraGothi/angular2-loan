import {Validators} from "@angular/forms";


/**
 * Field model
 */
export class Field {
  type: string;
  label: string;
  validations: Array<string> = [];

  /**
   * field constructor
   * set validation array if present
   *
   * @param info
   */
  constructor(info) {
    this.type = info.type;
    this.label = info.label;
    if (info.validations)
      this.validations = info.validations;
  }

  /**
   * prepare validation array for field
   */
  validation_array() {
    let array = [];
    this.validations.map(function (validation) {

      switch (validation) {
        case "required" :
          array.push(Validators.required);
          break;
        case "email" :
          array.push(Validators.email);
          break;
        case "mobile":
          array.push(Validators.minLength(10));
          array.push(Validators.pattern("^[0-9]*$"));
          break;
        default:
      }
    });

    return array;
  }
}
