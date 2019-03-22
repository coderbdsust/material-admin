
import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { ChartColor as C} from "../color.const";

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})
export class MixedComponent implements OnInit {

  mixedchart1:any;
  areachart2:any;

  constructor() { }

  ngOnInit() {
    this.mixedchart1 = new Chart("mixed-chart-1", {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Bar Dataset',
              data: [10, 20, 30, 40],
              backgroundColor: C.BLUE,
            borderColor: C.BLUE
          }, {
              label: 'Line Dataset',
              data: [10, 20, 30, 40],
              fill:false,
              backgroundColor: C.RED,
              // Changes this dataset to become a line
              type: 'line'
          }],
          labels: ['January', 'February', 'March', 'April']
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