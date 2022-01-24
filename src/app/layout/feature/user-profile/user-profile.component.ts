import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public myAge=26;

  constructor() { }

  ngOnInit() {
    this.myAge = new Date().getFullYear()-1994;
  }

}
