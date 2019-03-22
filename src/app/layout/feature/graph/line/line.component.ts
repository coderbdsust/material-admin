import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ChartColor } from "../color.const";

@Component({
  selector: "app-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.scss"]
})
export class LineComponent implements OnInit {
  stockLineChart: any;
  companyProfit: any;
  productTrends: any;

  constructor() {}

  ngOnInit() {
    this.stockLineChart = new Chart("linechart-1", {
      type: "line",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            backgroundColor: ChartColor.RED,
            borderColor: ChartColor.RED,
            fill: false,
            label: "Dhaka Stock Market last 7 days",
            data: [4, 3, 4, 5, 6, 9, 3],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });

    this.companyProfit = new Chart("linechart-2", {
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

    this.productTrends = new Chart("linechart-3", {
      type: "line",
      data: {
        labels: ["Jan'18", "Feb'18", "Mar'18", "Apr'18", "May'18", "Jun'18"],
        datasets: [
          {
            backgroundColor: ChartColor.BLUE,
            borderColor: ChartColor.BLUE,
            fill: false,
            label: "Javascript 6 month trends",
            data: [4, 3, 4, 5, 6, 9],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
  }
}
