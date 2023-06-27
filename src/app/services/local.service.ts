import {Injectable} from "@angular/core";
import {UserListItem} from "../shared/interface/user-list.interface";

@Injectable({
  providedIn: "root"
})

export class LocalService {

  public setLocalDate(userList: UserListItem[]): void {
    localStorage.setItem('userList', JSON.stringify(userList))
  }

  public getLocalDate(): UserListItem[] {
    return JSON.parse(localStorage?.getItem("userList") || '{}')
  }
}
