import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, Point } from "chart.js";
import { ChartColor } from "../color.const";
import 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  radarchart1:any;
  radarchart2:any;

  constructor() { }

  ngOnInit() {
    this.radarchart1 = new Chart("radarchart-1", {
      type: "radar",
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [
          {
            backgroundColor: ChartColor.BLUE,
            borderColor: ChartColor.BLUE,
            label: "Javascript 6 month trends",
            data: [4, 3, 4, 5, 6, 9],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
    this.radarchart2 = new Chart("radarchart-2", {
      type: "radar",
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [
          {
            backgroundColor: ChartColor.ORANGE,
            borderColor: ChartColor.ORANGE,
            label: "Javascript 6 month trends",
            data: [10, 3, 10, 5, 7, 9],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
  }

}
