import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      // {path:'counterparty-card',component:FilterComponent},
      // {path:'subagents',component:UserListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class MainRoutingModule {
}
