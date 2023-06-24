import {Component, Injector, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],

})
export class FilterComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  public get loginControl(): FormControl {
    return this.form.get('login') as FormControl;
  }

  public get telControl(): FormControl {
    return this.form.get('tel') as FormControl;
  }

  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get dateOfCreateControl(): FormControl {
    return this.form.get('dateOfCreate') as FormControl;
  }

  public get dateOfChangeControl(): FormControl {
    return this.form.get('dateOfChange') as FormControl;
  }

  public get statusControl(): FormControl {
    return this.form.get('status') as FormControl;
  }

  public get roleControl(): FormControl {
    return this.form.get('role') as FormControl;
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      login: [null, Validators.required],
      tel: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      dateOfCreate: [null, Validators.required],
      dateOfChange: [null, Validators.required],
      status: [null, Validators.required],
      role: [null, Validators.required]
    })
  }

}
