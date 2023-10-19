import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {UserService} from "../../../../services/user-service";
import {combineLatest, filter, map, Observable, startWith} from "rxjs";
import {UserListItem} from "../../../../shared/interface/user-list.interface";
import {StatusChangedEnum, StatusEnum} from "../../../../shared/enums/status.enum";
import {RoleChangedEnum} from "../../../../shared/enums/role.enum";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {userTableColumns} from "../../../../shared/model";
import {LocalService} from "../../../../services/local.service";
import {UserDateMapperService} from "../../../../services/user-date-mapper.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserListComponent implements OnInit, AfterViewInit {

  @Input() usersList: UserListItem[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private roleChangedEnum = RoleChangedEnum;

  public statusEnum = StatusEnum;
  public statusChangedEnum = StatusChangedEnum;
  public checkedUserCount: number = 0;

  public displayedColumns = userTableColumns;

  public userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private localDataService: LocalService,
              private mapperService: UserDateMapperService,
              private cdr: ChangeDetectorRef) {
  }


  public get userControl(): FormArray {
    return this.userForm?.get("usersCheck") as FormArray
  }

  public get checkAllControl(): FormControl {
    return this.userForm?.get('checkAll') as FormControl
  }

  ngOnInit(): void {
    this.setUserListFromApiToLocalStorage();
    this.initForm();
    this.selectAllChecked();
    this.selectedUser();
    this.paginator._intl.itemsPerPageLabel = "Отображать";
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  public status(value: string): string {
    return value === this.statusEnum.ACTIVE ? this.statusChangedEnum.ACTIVE : this.statusChangedEnum.BLOCKED
  }

  public userRole(value: boolean): string {
    return value ? this.roleChangedEnum.ADMINISTRATOR : this.roleChangedEnum.USER
  }

  private initForm(): void {

    if (this.usersList?.length > 0) {

      const userListControl = this.usersList.map(() => new FormControl(false));

      this.userForm = this.formBuilder.group({
        checkAll: false,
        usersCheck: new FormArray(userListControl)
      });
    }

  }

  private selectAllChecked(): void {

    this.checkAllControl?.valueChanges.subscribe(([checked, userList]) => {

      if (!checked) {
        this.checkedUserCount = 0
      }
      this.userControl?.patchValue(Array(userList?.length)
        .fill(checked), {emitEvent: true});
    })
  }

  private selectedUser(): void {
    this.userControl?.valueChanges.subscribe((checked) => {
      this.updateLocalStorageDuringCheckedUser(checked);
      const isAllSelected = checked.every((bool: boolean) => !!bool);
      this.checkAllControl?.patchValue(isAllSelected, {emitEvent: false});
    })
  }

  private setUserListFromApiToLocalStorage(): void {
    this.userService.getUsersList().pipe(
      map((user) => user?.users?.map((us) => this.mapperService.mapUserListGetFromApi(us))),
      map((userlist) => this.localDataService.setLocalDate(userlist))).subscribe();
  }

  private updateLocalStorageDuringCheckedUser(checked: any): void {
    const countOfCheckedUser = [];
    checked.filter((isBool: boolean) => !!isBool).forEach((bool: boolean, index: number) => {
      countOfCheckedUser.push(bool);
      this.checkedUserCount = countOfCheckedUser.length

      this.usersList[index].checked = true;
      this.localDataService.setLocalDate(this.usersList);
    })

  }

}
