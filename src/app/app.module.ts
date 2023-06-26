import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {MainModule} from "./core/main.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

const maskConfig: any = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    MainModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
