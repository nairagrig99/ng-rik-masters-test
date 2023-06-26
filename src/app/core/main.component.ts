import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router} from "@angular/router";
import {delay, filter} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {user} from "../shared/model";
import {CurrentUserInterface} from "../shared/interface/current-user.interface";

@Component({
  selector: 'app-core',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {
  }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 1024px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
