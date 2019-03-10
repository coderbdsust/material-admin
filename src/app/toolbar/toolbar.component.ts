import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../service/side-nav.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenav: SideNavService) { }

  ngOnInit() {
  }

  toggleRightSidenav() {
    console.log('toggleRightSidenav');
    this.sidenav.toggle();
 }


}
