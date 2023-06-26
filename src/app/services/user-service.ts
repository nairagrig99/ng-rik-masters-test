import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserListInterface} from "../shared/interface/user-list.interface";
import {HttpClient} from "@angular/common/http";
import {environments} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUsersList(): Observable<UserListInterface> {
    return this.http.get<UserListInterface>(environments.apiUrl)
  }
}
