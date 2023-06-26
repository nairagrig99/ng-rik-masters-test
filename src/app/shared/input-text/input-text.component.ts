import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  Output
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {

  @Input() label: string;

  @Input() controlType = 'text';

  @Input() controlName: string;

  @Input() errorMsg: string;

  @Input() isNumber: boolean = false;

  @Output() change: EventEmitter<void> = new EventEmitter();

  public ngControl: NgControl;
  public prefix: string;
  public model: string;


  constructor(public inj: Injector) {
  }

  ngAfterViewInit() {
    this.ngControl = this.inj.get(NgControl)
  }

  onChange: (val: string) => void = () => {
  }

  onTouch: (val: string) => void = () => {
  }

  setValue(value: any) {
    this.onChange(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  writeValue(writeValue: any): void {
    this.model = writeValue;
  }

  public removeInputValue(): void {
    this.model = "";
  }

  public modelChange(event: any): void {
    this.onChange(event);
  }

  get maskChoose(): string {
    if (this.isNumber) {
      this.prefix = '+7'
      return '(0{3}) 0{3} - 0{2} - 0{2}'
    }
    return '';
  }
}
