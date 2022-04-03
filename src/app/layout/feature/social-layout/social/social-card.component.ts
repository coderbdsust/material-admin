import { Component, OnInit, NgModule, Input } from '@angular/core';
@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialComponent implements OnInit {

  @Input("socialCardImage")
  public socialCardImage = "assets/bird/birds-291a.jpg";

  @Input("socialCardTitle")
  public socialCardTitle = "Hyacinth";

  @Input("socialCardSubTitle")
  public socialCardSubTitle = "I am bold";

  @Input("socialCardSubDesc")
  public socialCardSubDesc = "The hyacinth macaw, or hyacinthine macaw, is a parrot native to central and eastern South America. It is the largest macaw and the largest flying parrot species";

  constructor() {}

  ngOnInit() {}

}
