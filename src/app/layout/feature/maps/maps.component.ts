import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  private httpClient:HttpClient;

  apiLoaded: Observable<boolean>;
  
  options1: google.maps.MapOptions = {
    center: {lat: 51.0285861, lng: 13.7313505},
  };

  options2: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  optionsEarth: google.maps.MapOptions = {
    center: {lat: 31.9768057, lng: 5.4700153},
    zoom: 4
  };

  constructor(httpClient: HttpClient) {
    this.httpClient=httpClient;
  }

  ngOnInit() {
    this.loadMAP();
  }

  public loadMAP():void {
    this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAP_API_KEY}`, 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }

}
