import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
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
export class DatePickerComponent {

  /**
   * date value
   */
  private _date: string = "";

  /**
   * get initial date as input to the component
   */
  @Input()
  get date() {
    return this._date;
  }

  /**
   * set _date value
   * reflect the same value to date picker
   * @param date
   */
  set date(date) {
    this._date = date;
    if (this.picker && this._date.length > 0)
      this.picker.selectDate(new Date(this._date));
  }

  /**
   * Title of field
   */
  @Input()
  title: string;

  /**
   * date_format for input
   * @type {string}
   */
  @Input()
  date_format: string = 'dd MM yyyy';

  /**
   * Date changed emitter
   */
  @Output()
  onDateChanged = new EventEmitter();

  /**
   * date input field
   */
  @ViewChild('date_input')
  date_input: ElementRef;

  /**
   * date picker instance
   */
  private picker;

  /**
   * on load of component initialize Date Picker
   */
  ngOnInit() {
    let self = this;

    // initialize date picker
    this.picker = jQuery(this.date_input.nativeElement).datepicker({
      language: 'en',
      position: 'right center',
      dateFormat: this.date_format,
      onSelect: function (fd, d, picker) {
        self.onDateChanged.emit(fd);
      }
    }).data('datepicker');

    // set initial date to date picker
    this.picker.selectDate(new Date(this._date));
  }
}
