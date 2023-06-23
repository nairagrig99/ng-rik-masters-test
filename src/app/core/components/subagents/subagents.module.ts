import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SubagentsComponent} from "./subagents.component";

export const routes: Routes = [
  {path: '', component: SubagentsComponent}
]

@NgModule({
  declarations: [SubagentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubagentsModule {
}
