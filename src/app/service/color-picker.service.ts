import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {
  
  private defaultColor='red';

  constructor() { }

  getColor() {
    return this.defaultColor;
  }

  setColor(colorName: string) {
    this.defaultColor = colorName;
  }
}
