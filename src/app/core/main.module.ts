import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {MainComponent} from "./main.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [MainComponent,HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterOutlet
  ]
})
export class MainModule {
}
