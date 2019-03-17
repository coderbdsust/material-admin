import { Component, OnInit , NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule]
})

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
