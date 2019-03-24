import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ChartColor } from "../graph/color.const";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  linechart1: any;
  linechart2: any;

  constructor() { }

  ngOnInit() {
    this.linechart1 = new Chart("linechart-1", {
      type: "line",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            backgroundColor: ChartColor.RED,
            borderColor: ChartColor.RED,
            fill: false,
            label: "Apple",
            data: [4, 3, 4, 5, 6, 9, 3],
            borderWidth: 3
          },
          {
            backgroundColor: ChartColor.GREEN,
            borderColor: ChartColor.GREEN,
            fill: false,
            label: "Google",
            data: [8, 6, 4, 5, 6, 9, 1],
            borderWidth: 3
          },
          {
            backgroundColor: ChartColor.BLUE,
            borderColor: ChartColor.BLUE,
            fill: false,
            label: "Facebook",
            data: [5, 7, 4, 2, 6, 9, 10],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
    this.linechart2 = new Chart("linechart-2", {
      type: "bar",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            backgroundColor: ChartColor.RED,
            borderColor: ChartColor.RED,
            fill: false,
            label: "Apple",
            data: [4, 3, 4, 5, 6, 9, 3],
            borderWidth: 3
          },
          {
            backgroundColor: ChartColor.GREEN,
            borderColor: ChartColor.GREEN,
            fill: false,
            label: "Google",
            data: [8, 6, 4, 5, 6, 9, 1],
            borderWidth: 3
          },
          {
            backgroundColor: ChartColor.BLUE,
            borderColor: ChartColor.BLUE,
            fill: false,
            label: "Facebook",
            data: [5, 7, 4, 2, 6, 9, 10],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
  }

}
