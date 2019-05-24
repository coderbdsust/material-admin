import { Component, OnInit, NgModule, ViewChild} from '@angular/core';
import { MatSlideToggle } from "@angular/material";

import { SideNavService } from '../service/side-nav.service';
import { ColorPickerService } from 'src/app/service/color-picker.service';
import {
  FormControl,
} from "@angular/forms";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  public closeSetting: boolean = true;
  @ViewChild('queryToggle') ref: MatSlideToggle;
  constructor(public sidenavService: SideNavService, public colorPicker: ColorPickerService) { }
  

  public onChooseColor(action){
    this.colorPicker.setColor(action);
  }

  public getColor(){
    return this.colorPicker.getColor();
  }

  ngOnInit() {
    this.sidenavService.setQueryToggle(this.ref);

  }

  toggle(){
    this.closeSetting = !this.closeSetting;
  }
  
}
