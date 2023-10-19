import {Injectable} from "@angular/core";
import {UserListItem} from "../shared/interface/user-list.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class LocalService {
  public getUserListFromLocalStorage$: Subject<UserListItem[]> = new Subject();

  public setLocalDate(userList: UserListItem[]): void {
    if (userList) {
      this.getUserListFromLocalStorage$.next(userList);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
  }

  public getLocalDate(): UserListItem[] {
    return JSON.parse(localStorage?.getItem("userList") || '{}')
  }


}
