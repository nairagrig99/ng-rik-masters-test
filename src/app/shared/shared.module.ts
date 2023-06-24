import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextComponent} from "./input-text/input-text.component";
import {SelectComponent} from "./select/select.component";
import {NgxMaskModule} from "ngx-mask";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [InputTextComponent, SelectComponent],
  exports: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule {
}
