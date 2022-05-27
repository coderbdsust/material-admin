import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ChatAdapter, IChatController} from 'ng-chat';
import { MessengerAdapter } from './MessengerAdapter';

@Component({
  selector: 'app-social-layout',
  templateUrl: './social-layout.component.html',
  styleUrls: ['./social-layout.component.scss']
})
export class SocialLayoutComponent implements OnInit {
  
  title = 'app';
  userId = 999;
  public adapter: ChatAdapter = new MessengerAdapter();
 
  @ViewChild('ngChatInstance')
  protected ngChatInstance: IChatController;

  constructor() { }

  ngOnInit() {
  }

}
