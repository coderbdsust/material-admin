import { Injectable } from '@angular/core';
import { defaultComparator } from '@angular/common/src/pipes/keyvalue_pipe';


@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {

  private defaultColor = 'red';
  private progressBarColor = 'warn';

  constructor() { }

  getColor() {
    return this.defaultColor;
  }

  setColor(colorName: string) {
    this.defaultColor = colorName;
    this.setProgressBarColor();
  }

  setProgressBarColor() {
    switch (this.defaultColor) {
      case 'red':
        this.progressBarColor = 'warn';
        break;
      case 'black':
        this.progressBarColor = 'primary';
        break;
      case 'blue':
        this.progressBarColor = 'primary';
        break;
      case 'green':
        this.progressBarColor = 'primary';
        break;
      case 'orange':
        this.progressBarColor = 'accent';
        break;
      case 'white':
        this.progressBarColor = 'primary';
        break;
      default:
        this.progressBarColor = 'basic';
    }
  }
  
  getProgressBarColor() {
    return this.progressBarColor;
  }

}
