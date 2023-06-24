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

const routes: Routes = [
  {
    path: '',
    component: CounterpartyCardComponent
  }
]

@NgModule({
  declarations: [CounterpartyCardComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class CounterpartyCardModule {
}
