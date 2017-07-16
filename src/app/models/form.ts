import {Field} from "./field";

/**
 * Form model
 * Dynamic from is created using this structure
 */
export class Form {
  type: string;
  properties: Object = {};

  fields: Object = {};

  /**
   * Form constructor to initialize the form
   *
   * @param info
   */
  constructor(info) {
    this.type = info.type;
    this.properties = info.properties;

    // prepare fields from properties
    for (let property in this.properties) {
      this.fields[property] = new Field(this.properties[property])
    }
  }

  /**
   * get field keys
   *
   * @returns {string[]}
   */
  get field_keys() {
    return Object.keys(this.fields);
  }
}
