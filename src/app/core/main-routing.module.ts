import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'counterparty-card',
        redirectTo: 'counterparty-card',
        pathMatch: 'full'
      },
      {
        path: 'counterparty-card',
        loadChildren: () => import('../core/components/counterparty-card/counterparty-card.module').then((m) => m.CounterpartyCardModule)
      },
      {
        path: 'subagents',
        loadChildren: () => import('../core/components/subagents/subagents.module').then((m) => m.SubagentsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class MainRoutingModule {
}
