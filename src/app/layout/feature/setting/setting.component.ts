import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from 'src/app/service/color-picker.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private colorPicker: ColorPickerService) { }

  ngOnInit() {
  }

  public onChooseColor(action){
    console.log(action);
    this.colorPicker.setColor(action);
  }

  public getColor(){
    return this.colorPicker.getColor();
  }

}
