import {Component, Output, EventEmitter, Input} from "@angular/core";
import {Http} from "@angular/http";
import {FormGroup} from "@angular/forms";
import {Field} from "../../../../models/field";
declare let jQuery: any;

/**
 * Company auto complete
 * It helps to search company
 *
 * E.g. <company-auto-complete></company-auto-complete>
 */
@Component({
  selector: 'text-field',
  templateUrl: 'text-field.component.html',
  styleUrls: ['text-field.component.css'],
})
export class TextFieldComponent {

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
