import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css']
})
export class ChartJsComponent implements OnInit {

  title = 'indicadores';

  constructor() { }

  ngOnInit(): void {
    var pass = new Chart("pass",{
      type: 'line',
      data: {
        labels:['sprint 23.1', 'sprint 23.2', 'sprint 23.3', 'sprint 23.4', 'sprint 23.5'],
        datasets:[{
          label:'Número de testes #Pass',
          data: [12,19,3,10,5],
          fill: false,
          borderColor: 'rgb(75, 192, 192)'
        }]
      }
    });

    var fail = new Chart("fail",{
      type: 'line',
      data: {
        labels:['sprint 23.1', 'sprint 23.2', 'sprint 23.3', 'sprint 23.4', 'sprint 23.5'],
        datasets:[{
          label:'Número de testes #Fail',
          data: [8,1,17,10,15],
          borderColor: 'rgb(255, 10, 10)',
          fill: false
        }]
      }
    });


    var pizza = new Chart("pizza",{
      type: 'pie',
      data: {
        labels:['Pass', 'Fail'],
        datasets:[{
          label:'Número de testes #Pass / #Fail',
          data: [12,19],
          backgroundColor:[
            'rgba(255,99,132,0.8)',
            'rgba(54,99,132,0.8)'
          ]
        }]
      }
    });


  }

}
