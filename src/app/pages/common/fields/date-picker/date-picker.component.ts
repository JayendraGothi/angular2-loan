import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
import {TextFieldComponent} from "../text-field/text-field.component";
declare let jQuery: any;

/**
 * Input Date Field Component
 * It helps to set and get date value from date picker.
 *
 * E.g. <date-picker [date]="date_variable" [title]="label for input field" (onDateChanged)="dateChanged($event)" >
 */
@Component({
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html'
})
export class DatePickerComponent extends TextFieldComponent{

  /**
   * date picker instance
   */
  private picker;

  /**
   * date input field
   */
  @ViewChild('date_input')
  date_input: ElementRef;

  /**
   * on load of component initialize Date Picker
   */
  ngOnInit() {
    let self = this;

    // initialize date picker
    this.picker = jQuery(this.date_input.nativeElement).datepicker({
      language: 'en',
      position: 'right center',
      dateFormat: 'dd MM yyyy',
      onSelect: function (fd, d, picker) {
        self.onDateChanged(fd);
      }
    }).data('datepicker');

    // set initial date to date picker
    // this.picker.selectDate(new Date(this._date));
  }

  /**
   * on date changed update form
   *
   * @param date
   */
  onDateChanged(date) {
    let data = {};
    data[this.field] = date;
    this.form.patchValue(data);
  }
}
