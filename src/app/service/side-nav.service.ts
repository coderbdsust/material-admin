import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material";

@Injectable()
export class SideNavService {
  constructor() {}

  private sidenav: MatDrawer;
  private fullOpenSidebar: boolean = true;

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  public open() {
    this.fullOpenSidebar=true;
    // return this.sidenav.open();
  }

  public close() {
    this.fullOpenSidebar=false;
    // return this.sidenav.close();
  }

  public isOpen(): boolean {
    return this.fullOpenSidebar;
    // return this.sidenav.opened;
  }

  public toggle(): void {
    this.fullOpenSidebar=!this.fullOpenSidebar;
    // this.sidenav.toggle();
  }
  
}
