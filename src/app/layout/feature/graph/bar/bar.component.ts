import { Component, OnInit } from "@angular/core";
import { Chart, ChartData, Point } from "chart.js";
import { ChartColor } from "../color.const";
@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.scss"]
})
export class BarComponent implements OnInit {
  barchart1: any;
  barchart2: any;
  barchart3: any;

  constructor() {}

  ngOnInit() {
    this.barchart1 = new Chart("barchart-1", {
      type: "bar",
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [
          {
            backgroundColor: ChartColor.ORANGE,
            borderColor: ChartColor.BLUE,
            fill: false,
            label: "Javascript 6 month trends",
            data: [4, 3, 10, 5, 6, 9],
            borderWidth: 3
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });
    this.barchart2 = new Chart("barchart-2", {
      type: "horizontalBar",
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [
          {
            backgroundColor: ChartColor.RED,
            borderColor: ChartColor.ORANGE,
            fill: false,
            label: "Javascript 6 month trends",
            data: [4, 3, 10, 5, 6, 9],
            borderWidth: 3
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });
  }
}
