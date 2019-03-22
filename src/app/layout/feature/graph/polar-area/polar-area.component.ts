import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { ChartColor as C} from "../color.const";

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.scss']
})
export class PolarAreaComponent implements OnInit {

 
  polarareachart1:any;
  polarareachart2:any;

  constructor() { }

  ngOnInit() {
    this.polarareachart1 = new Chart("polar-area-chart-1", {
      type: "polarArea",
      data: {
        labels: ["Bangladesh", "India", "USA", "England", "Germany"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [C.RED, C.ORANGE, C.BLUE, C.GREEN, C.YELLOW],
            data: [2478,5267,734,784,433]
          }
        ]
      }
    });

    this.polarareachart2 = new Chart("polar-area-chart-2", {
      type: "polarArea",
      data: {
        labels: ["Android", "IOS", "WINDOWS"],
        datasets: [
          {
            label: "Market share (%)",
            backgroundColor: [C.RED, C.YELLOW, C.BLUE],
            data: [80,19,1]
          }
        ]
      }
    });
  }

}
