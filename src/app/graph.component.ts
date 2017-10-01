import { Component, Input, OnInit } from '@angular/core';

import { ChartDataGetterService } from './chart-data-getter.service';
import { Coordinate } from './coordinate.class';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChartDataGetterService]
})

export class GraphComponent implements OnInit {

  actualCoordinates : Coordinate[] = [{'x':new Date , 'y':0}];

  constructor(private chartDataGetter : ChartDataGetterService) {}

  public ngOnInit() : void {
    let chartData : ChartDataGetterService = this.chartDataGetter;
    chartData.getChartList()
          .then(data => this.populateChartList(data.capteurs));
  }

  private setChartData(coord : Coordinate[]){
    if (coord.length > 0){
      let coordonnees = [{'data' : coord}];
      this.lineChartData.push(coordonnees);
    }
  }

  private populateChartList(sensors:any){
    for (let sensor of sensors) {
      let mesures = sensor[2][0].split(" ");
      for (let mesure of mesures){
        this.chartDataGetter.getChartData(20170701,20170703,mesure,sensor[0],sensor[1])
              .then(data => this.setChartData(data)).catch(this.handleError);
      }
    }
  }

  private handleError(error: any): Promise<any> {
  console.error('Une erreur est survenue!', error); // for demo purposes only
  return Promise.reject(this.actualCoordinates);
  }

  // lineChart
  public chartList:Array<any> = [];

  public lineChartData:Array<any> =[];

  public lineChartOptions:any = {
                    scales: {
                        xAxes: [{type: 'time'}],
                        yAxes: [{
                                id : 'A',
                                position : 'left',
                                display: true,
                                ticks: {suggestedMin: 0,//  minimum will be 0, unless there is a lower value.
                                        suggestedMax: 1}
                                },
                                {
                                  id : 'B',
                                  position : 'right',
                                  display: true,
                                  ticks: {suggestedMin: 0,//  minimum will be 0, unless there is a lower value.
                                          suggestedMax: 1}
                                }]
                    }};
  public lineChartColors:Array<any> = [
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


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
