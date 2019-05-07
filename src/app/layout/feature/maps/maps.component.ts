import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat1: number = 51.678418;
  lng1: number = 7.809007;
  lat2: number = 51.678418;
  lng2: number = 7.809007;
  curLat: any;
  curLng: any;

  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.curLng = +pos.coords.longitude;
        this.curLat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
  }

}
