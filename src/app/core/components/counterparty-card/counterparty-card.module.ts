import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CounterpartyCardComponent} from "./counterparty-card.component";
import {FilterComponent} from "./filter/filter.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserListComponent} from "./user-list/user-list.component";
import {MatTableModule} from '@angular/material/table';
import {NgxMaskModule} from "ngx-mask";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {
    path: '',
    component: CounterpartyCardComponent
  }
]

@NgModule({
  declarations: [CounterpartyCardComponent, FilterComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxMaskModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  exports: [
    CounterpartyCardComponent
  ],
  providers: []
})

export class CounterpartyCardModule {
}
