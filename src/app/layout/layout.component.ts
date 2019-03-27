import { Component, OnInit, NgModule} from '@angular/core';
import { SideNavService } from '../service/side-nav.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private sidenavService: SideNavService) { }

  ngOnInit() {
  }

}
