import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
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
export class SelectComponent implements ControlValueAccessor {

  @Input() options: SearchableSelectInterface[];

  @Input() label: string;

  @Input() control: FormControl;

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

}
