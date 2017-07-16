import {Component, Output, EventEmitter, Input} from "@angular/core";
import {Http} from "@angular/http";
import {FormGroup} from "@angular/forms";
import {Field} from "../../../../models/field";
declare let jQuery: any;

/**
 * validation message field
 * parse errors and display error accordingly
 */
@Component({
  selector: 'validation-message',
  templateUrl: 'validation-message.component.html',
  styleUrls: ['validation-message.component.css'],
})
export class ValidationMessageComponent {

  /**
   * form instance
   */
  @Input()
  form: FormGroup;

  /**
   * field name
   */
  @Input()
  field: string;

  /**
   * field options
   */
  @Input()
  form_field: Field;

  /**
   * form submitted check
   */
  @Input()
  form_submitted: boolean;
}
