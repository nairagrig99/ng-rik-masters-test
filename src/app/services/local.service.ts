import {Injectable} from "@angular/core";
import {UserListInterface, UserListItem} from "../shared/interface/user-list.interface";

@Injectable({
  providedIn: "root"
})

export class LocalService {

  public setLocalDate(userList: UserListItem[]): void {
    localStorage.setItem('userList', JSON.stringify(userList))
  }

  public getLocalDate(): UserListInterface[] {
    return JSON.parse(localStorage?.getItem("userList") || '{}')
  }
}
