import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../service/side-nav.service';
import { ROUTE_NAME } from '../routes/Routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public currentPathName = ROUTE_NAME.SOCIAL;

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
  }

}
