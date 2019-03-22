import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ChartColor as C } from "../color.const";
@Component({
  selector: "app-bubble",
  templateUrl: "./bubble.component.html",
  styleUrls: ["./bubble.component.scss"]
})
export class BubbleComponent implements OnInit {
  bubblechart1: any;
  bubblechart2: any;

  constructor() {}

  ngOnInit() {
    this.bubblechart1 = new Chart("bubble-chart-1", {
      type: "bubble",
      data: {
        labels: ["Bangladesh", "India", "USA", "England", "Germany"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [C.RED, C.ORANGE, C.BLUE, C.GREEN, C.YELLOW],
            data: [
              {x: 0,y: 1,r: 10},
              {x: 2,y: 7,r: 8},
              {x: 4,y: 2,r: 7},
              {x: 2,y: 4,r: 5},
              {x: 7,y: 6,r: 9},
              {x: 9,y: 3,r: 13},
              {x: 10,y: 3,r: 12},
            ]
          }
        ]
      }
    });

    this.bubblechart2 = new Chart("bubble-chart-2", {
      type: "bubble",
      data: {
        labels: ["Android", "IOS", "WINDOWS"],
        datasets: [
          {
            label: "Market share (%)",
            backgroundColor: C.RED,
            data: [
              {x: 0,y: 1,r: 10},
              {x: 2,y: 7,r: 8},
              {x: 4,y: 2,r: 7}
            ]
          }
        ]
      }
    });
  }
}
