import {Component, EventEmitter, forwardRef, Injector, Input, OnChanges, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {SearchableSelectInterface} from "../interface/status.interface";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ]
})
export class SelectComponent implements ControlValueAccessor, OnChanges {

  @Input() options: SearchableSelectInterface[];

  @Input() label: string;
  @Input() controlName: string;
  @Output() findSelectedOption: EventEmitter<SearchableSelectInterface> = new EventEmitter<SearchableSelectInterface>();

  public ngControl: NgControl;
  public model: SearchableSelectInterface;

  onChange: (val: string) => void = () => {
  }

  onTouch: (val: string) => void = () => {
  }

  get value(): any {
    return this.model;
  };

  //set accessor including call the onchange callback
  set value(v: any) {

    this.findSelectedOption.emit(v);
    this.onChange(v);
    this.onTouch(v);
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  writeValue(value: any): void {
    this.model = value;
  }


  constructor(private inj: Injector) {
  }

  ngAfterViewInit() {
    this.ngControl = this.inj.get(NgControl)
  }


  public changeOption(value: any) {
    console.log('value', value);
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }

  ngOnChanges(): void {

  }

}
