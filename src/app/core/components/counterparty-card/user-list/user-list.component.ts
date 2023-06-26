import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user-service";
import {map, switchMap} from "rxjs";
import {UserListInterface} from "../../../../shared/interface/user-list.interface";
import {StatusChangedEnum, StatusEnum} from "../../../../shared/enums/status.enum";
import {RoleChangedEnum} from "../../../../shared/enums/role.enum";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {userTableColumns} from "../../../../shared/model";
import {LocalService} from "../../../../services/local.service";
import {UserDateMapperService} from "../../../../services/user-date-mapper.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private roleChangedEnum = RoleChangedEnum;

  public statusEnum = StatusEnum;
  public statusChangedEnum = StatusChangedEnum;

  public usersList: UserListInterface[];
  public displayedColumns = userTableColumns;

  public userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private localDataService: LocalService,
              private mapperService: UserDateMapperService) {
  }

  public get userControl(): FormArray {
    return this.userForm?.get("usersCheck") as FormArray
  }

  public get checkAllControl(): FormControl {
    return this.userForm?.get('checkAll') as FormControl
  }

  ngOnInit(): void {
    this.setUserListFromApiToLocalStorage();
    this.getUsersListFromLocalStorage();
    this.initForm()
    this.selectAllChecked();
    this.selectedUser();
  }

  public status(value: string): string {
    return value === this.statusEnum.ACTIVE ? this.statusChangedEnum.ACTIVE : this.statusChangedEnum.BLOCKED
  }

  public userRole(value: boolean): string {
    return value === true ? this.roleChangedEnum.ADMINISTRATOR : this.roleChangedEnum.USER
  }

  private initForm(): void {
    if (this.usersList.length > 0) {
      const userListControl = this.usersList?.map(() => new FormControl(false))

      this.userForm = this.formBuilder.group({
        checkAll: new FormControl(false),
        usersCheck: new FormArray(userListControl)
      })
    }
  }

  private selectAllChecked(): void {
    this.checkAllControl?.valueChanges.subscribe((checked) => {
      this.userControl?.patchValue(Array(this.usersList.length)
        .fill(checked), {emitEvent: false});
    })
  }

  private selectedUser(): void {
    this.userControl?.valueChanges.subscribe((checked) => {
      const isAllSelected = checked.every((bool: boolean) => !!bool);
      this.checkAllControl?.patchValue(isAllSelected, {emitEvent: false});
    })
  }

  private getUsersListFromLocalStorage(): void {
    this.usersList = this.localDataService.getLocalDate();
  }

  private setUserListFromApiToLocalStorage(): void {
    this.userService.getUsersList().pipe(
      map((user) => user.users.map((us) =>
        this.mapperService.mapUserListGetFromApi(us))),
      map((userlist) => this.localDataService.setLocalDate(userlist))).subscribe()
  }

}
