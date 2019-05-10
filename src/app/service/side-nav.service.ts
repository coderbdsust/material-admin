import { Injectable } from "@angular/core";
import { MatDrawer, MatSlideToggle } from "@angular/material";

@Injectable()
export class SideNavService {
  constructor() { }

  private sidenav: MatDrawer;
  private matToggleElement: MatSlideToggle;
  private fullOpenSidebar: boolean = true;

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  public open() {
    this.fullOpenSidebar = true;
  }

  public close() {
    this.fullOpenSidebar = false;
  }

  public isOpen(): boolean {
    return this.fullOpenSidebar;
  }

  public toggle(): void {
    this.fullOpenSidebar = !this.fullOpenSidebar;
  }

  setQueryToggle(ref:MatSlideToggle){
    this.matToggleElement = ref;
  }
  public getQueryMode(): string {
    if (this.matToggleElement.checked === false) {
      return "normal";
    } else {
      return "query";
    }
  }

}
