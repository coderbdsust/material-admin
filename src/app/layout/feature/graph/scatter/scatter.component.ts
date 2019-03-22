import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ChartColor as C } from "../color.const";
@Component({
  selector: "app-scatter",
  templateUrl: "./scatter.component.html",
  styleUrls: ["./scatter.component.scss"]
})
export class ScatterComponent implements OnInit {
  scatterchart1: any;

  constructor() {}

  ngOnInit() {
    this.scatterchart1 = new Chart("scatter-chart-1", {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter Dataset",
            data: [
              {
                x: -10,
                y: 0
              },
              {
                x: 0,
                y: 10
              },
              {
                x: 10,
                y: 5
              },
              {
                x: 2,
                y: 8
              },
              {
                x: 3,
                y: 7
              },
              {
                x: 4,
                y: 5
              },
              {
                x: 5,
                y: 9
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "bottom"
            }
          ]
        }
      }
    });
  }
}
