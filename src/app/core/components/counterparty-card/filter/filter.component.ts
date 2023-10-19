import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {role, status} from "../../../../shared/model";
import {LocalService} from "../../../../services/local.service";
import {StatusChangedEnum, StatusEnum} from "../../../../shared/enums/status.enum";
import {UserListItem} from "../../../../shared/interface/user-list.interface";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  public form: FormGroup;
  public status = status;
  public statusEnum = StatusEnum;
  public statusChangeEnum = StatusChangedEnum;
  public role = role;

  public usersList: UserListItem[] = [];

  constructor(private formBuilder: FormBuilder,
              private localService: LocalService) {
  }

  ngOnInit(): void {
    this.usersList = this.localService.getLocalDate();
    this.form = this.initForm();
  }

  public get loginControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  public get telControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  public get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get dateOfCreateControl(): FormControl {
    return this.form.get('create_at') as FormControl;
  }

  public get dateOfChangeControl(): FormControl {
    return this.form.get('update_at') as FormControl;
  }

  public get statusControl(): FormControl {
    return this.form.get('status') as FormControl;
  }

  public get roleControl(): FormControl {
    return this.form.get('role') as FormControl;
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')]],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      create_at: [null, Validators.required],
      update_at: [null, Validators.required],
      status: [null, Validators.required],
      role: [null, Validators.required]
    })
  }

  public blockOrUnlockUser(type: string): void {
    this.usersList.forEach((user, index, array) => {
      if (array[index].checked) {
        array[index].status = type
        this.localService.setLocalDate(array);
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    })
  }

  public search(): void {
    const formValue = this.form.value;
    console.log('formValue', formValue)
    const filteredValue = this.usersList.filter((user) => {
      return Object.keys(user).filter((us) => !!formValue[us]).find((userKey) => {
          const userItem = userKey as keyof UserListItem;

          const filterFieldSilence = String(user[userItem]).toLowerCase().slice(0, formValue[userKey]?.length);
          const filterFieldSilenceForPhone = String(user[userItem]).slice(1, formValue[userKey]?.length + 1);

          return (!!formValue[userKey] && filterFieldSilence === formValue[userKey]
            || (typeof formValue[userKey] === 'object' && formValue[userKey]?.value === user[userItem])
            || (userKey === 'phone' && filterFieldSilenceForPhone === formValue[userKey]))
        }
      )
    }).filter((filteredUser) => {
      const hasUser = Object.keys(filteredUser).map((key) => {
        const userItem = key as keyof UserListItem;

        const filterFieldSilence = String(filteredUser[userItem]).slice(0, formValue[key]?.length);
        const filterFieldSilenceForPhone = String(filteredUser[userItem]).slice(1, formValue[key]?.length + 1);

        return !(!!formValue[key] && filterFieldSilence !== formValue[key])
          || (typeof formValue[key] === 'object' && formValue[key]?.value === filteredUser[userItem])
          || (key === 'phone' && filterFieldSilenceForPhone === formValue[key])
      });

      return hasUser.every((isUser) => !!isUser);
    })
    this.usersList = filteredValue;
  }

  public selectedValue(value: any, type: string) {
    if (type === 'status') {
      this.form.get('status')?.setValue(value);
    } else {
      this.form.get('role')?.setValue(value);
    }
  }

}
