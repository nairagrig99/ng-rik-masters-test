import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {MainComponent} from "./main.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {CounterpartyCardModule} from "./components/counterparty-card/counterparty-card.module";
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from "../shared/shared.module";
import {NgxMaskModule} from "ngx-mask";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LocalService} from "../services/local.service";
import {UserDateMapperService} from "../services/user-date-mapper.service";
import {UserService} from "../services/user-service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [MainComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterOutlet,
    RouterModule,
    CounterpartyCardModule,
    MatButtonModule,
    SharedModule,
    NgxMaskModule.forChild(),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [LocalService, UserDateMapperService, UserService]
})
export class MainModule {
}
