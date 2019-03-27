import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDrawer} from '@angular/material';
import {SideNavService} from '../service/side-nav.service';
import { ColorPickerService } from '../service/color-picker.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  @ViewChild('sideNav') public sideNav: MatDrawer;
  
  constructor(private sidenavService: SideNavService, private colorPicker: ColorPickerService) {
  }
  
  ngOnInit() {
    this.sidenavService.setSidenav(this.sideNav);
  }
}

