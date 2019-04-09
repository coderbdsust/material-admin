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
  lng3: number = 7.809007;
  
  constructor() { }

  ngOnInit() {
  }

}
