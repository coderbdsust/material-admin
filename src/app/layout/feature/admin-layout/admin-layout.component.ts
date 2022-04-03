import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ChartColor } from "../graph/color.const";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  chart1: any;
  chart3: any;
  analytic1: any;
  analytic2: any;
  dataSource: Object;

  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Region wise revenue",
        "subcaption": " 1955-2020",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
      },
      
      "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
          "minvalue": "0.5",
          "maxvalue": "1.0",
          "color": "#FFD74D"
        }, {
          "minvalue": "1.0",
          "maxvalue": "2.0",
          "color": "#FB8C00"
        }, {
          "minvalue": "2.0",
          "maxvalue": "3.0",
          "color": "#E65100"
        }]
      },
      
      "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
      }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
      }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
      }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
      }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
      }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
      }]
    }
  }

  ngOnInit() {
    this.chart1 = new Chart("chart-1", {
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
    this.chart3 = new Chart("chart-3", {
      type: "doughnut",
      data: {
        labels: ["Bangladesh", "India", "USA", "England", "Germany"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [ChartColor.RED, ChartColor.ORANGE, ChartColor.BLUE, ChartColor.GREEN, ChartColor.YELLOW],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      }
    });

    this.analytic1 = new Chart("analytic-1", {
      type: "line",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            backgroundColor: ChartColor.GREEN,
            borderColor: ChartColor.GREEN,
            fill: false,
            label: "User",
            data: [4, 3, 4, 5, 6, 9, 11],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });

    this.analytic2 = new Chart("analytic-2", {
      type: "bar",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            backgroundColor: ChartColor.GRAY,
            borderColor: ChartColor.GRAY,
            fill: false,
            label: "Revenue",
            data: [4, 3, 4, 5, 6, 9, 10],
            borderWidth: 3
          }
        ]
      },
      options: {}
    });
  }



}
