import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CounterpartyCardComponent} from "./counterparty-card.component";
import {FilterComponent} from "./filter/filter.component";

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
    RouterModule.forChild(routes)
  ]
})

export class CounterpartyCardModule {
}
