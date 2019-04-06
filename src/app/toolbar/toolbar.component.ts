import { Component, OnInit } from "@angular/core";
import { SideNavService } from "../service/side-nav.service";
import { ColorPickerService } from '../service/color-picker.service';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss", '../layout/layout.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(public sidenav: SideNavService, public colorPicker: ColorPickerService) {}

  ngOnInit() {}

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
}
