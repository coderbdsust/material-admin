import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { ChartColor as C} from "../color.const";

@Component({
  selector: 'app-dognut',
  templateUrl: './dognut.component.html',
  styleUrls: ['./dognut.component.scss']
})
export class DognutComponent implements OnInit {

  dognutchart1:any;
  dognutchart2:any;

  constructor() { }

  ngOnInit() {
    this.dognutchart1 = new Chart("dognutchart-1", {
      type: "doughnut",
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

    this.dognutchart2 = new Chart("dognutchart-2", {
      type: "doughnut",
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
