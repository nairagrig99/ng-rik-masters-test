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
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";


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
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class MainModule {
}
