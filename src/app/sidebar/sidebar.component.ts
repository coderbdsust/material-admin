import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDrawer} from '@angular/material';
import {SideNavService} from '../service/side-nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sideNav') public sideNav: MatDrawer;
  
  constructor(private sidenavService: SideNavService) {
  }
  
  ngOnInit() {
    this.sidenavService.setSidenav(this.sideNav);
  }
}
