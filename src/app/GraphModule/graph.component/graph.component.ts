import { Component, Input } from '@angular/core';

import { Coordinate } from './coordinate.class';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html'
})

export class GraphComponent  {

  // lineChart
    public lineChartData:Array<any> = [
      {data: []}];

    public lineChartOptions:any = {
      responsive: true,
      scales: {
          xAxes: [{type: 'time'}],
          yAxes: [{
                  id : 'A',
                  position : 'left',
                  display: true,
                  ticks: {suggestedMin: 0,//  minimum will be 0, unless there is a lower value.
                          suggestedMax: 1}
                  }]
      }
    };
    public lineChartColors:Array<any> = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    @Input() graphID: number;

    @Input() set graphData(data : Object){
      if (typeof(data[this.graphID]) != 'undefined'){
        this.lineChartData = data[this.graphID];
      }
    }
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
}
