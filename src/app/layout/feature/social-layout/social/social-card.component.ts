import { Component, OnInit, NgModule, Input } from '@angular/core';
@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialComponent implements OnInit {

  @Input("socialCardImage")
  public socialCardImage = "assets/bird/birds-291a.jpg";

  constructor() { }

  ngOnInit() {
  }

}
