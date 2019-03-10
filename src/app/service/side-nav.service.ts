import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material";
import { ROUTE_NAME } from "../routes/Routes";

@Injectable()
export class SideNavService {
  public currentPathName = ROUTE_NAME.HOME;
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

  public getCurrentItem() {
    return this.currentPathName;
  }
}
