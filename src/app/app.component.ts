import { Component, ViewChild, OnInit } from "@angular/core";
import { SideNavService } from "./service/side-nav.service";
// import { DomSanitizer } from "@angular/platform-browser";
// import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss", "./layout/layout.component.scss"]
})
export class AppComponent {
  title = "next2Solve";
  constructor(private sidenavService: SideNavService) {}

  public isSidebarOpen(): boolean {
    return this.sidenavService.isOpen();
  }
}
