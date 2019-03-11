import { Component, OnInit } from "@angular/core";
import { SideNavService } from "../service/side-nav.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss", '../layout/layout.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenav: SideNavService) {}

  ngOnInit() {}

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
}
