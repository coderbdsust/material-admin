import { Component, OnInit, NgModule} from '@angular/core';
import { SideNavService } from '../service/side-nav.service';
import { ColorPickerService } from 'src/app/service/color-picker.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  public closeSetting: boolean = true;

  constructor(public sidenavService: SideNavService,public colorPicker: ColorPickerService) { }

  public onChooseColor(action){
    console.log(action);
    this.colorPicker.setColor(action);
  }

  public getColor(){
    return this.colorPicker.getColor();
  }

  ngOnInit() {
  }

  toggle(){
    console.log('toggle menu');
    this.closeSetting=!this.closeSetting;
  }

}
