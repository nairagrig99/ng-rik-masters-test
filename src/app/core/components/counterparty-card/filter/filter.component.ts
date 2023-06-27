import {Component, Injector, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {role, status} from "../../../../shared/model";
import {LocalService} from "../../../../services/local.service";
import {StatusEnum} from "../../../../shared/enums/status.enum";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],

})
export class FilterComponent implements OnInit {

  public form: FormGroup;
  public status = status;
  public statusEnum = StatusEnum;
  public role = role;

  constructor(private formBuilder: FormBuilder,
              private localService: LocalService) {
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
      login: [null, [Validators.required, Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')]],
      tel: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      dateOfCreate: [null, Validators.required],
      dateOfChange: [null, Validators.required],
      status: [null, Validators.required],
      role: [null, Validators.required]
    })
  }

  public blockOrUnlockUser(type: string): void {
    this.localService.getLocalDate().forEach((user, index, array) => {
      if (array[index].checked) {
        array[index].status = type
        this.localService.setLocalDate(array);
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    })
  }

}
