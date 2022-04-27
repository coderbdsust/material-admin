import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {

  private defaultColor = 'white';
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
      case 'teal':
        this.progressBarColor = 'accent';
        break;
      case 'white':
        this.progressBarColor = 'warn';
        break;
      default:
        this.progressBarColor = 'basic';
    }
  }
  
  getProgressBarColor() {
    return this.progressBarColor;
  }

}
