import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';


@Injectable()
export class SideNavService {
  constructor() {}

  private sidenav: MatDrawer;

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
