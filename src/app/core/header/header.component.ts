import { Component } from '@angular/core';
import {CurrentUserInterface} from "../../shared/interface/current-user.interface";
import {user} from "../../shared/model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public userInfo: CurrentUserInterface = user;
}
