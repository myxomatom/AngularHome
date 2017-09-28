import { Component, OnInit } from '@angular/core';

import { ChartDataGetterService } from './chart-data-getter.service';
import { Coordinate } from './coordinate.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChartDataGetterService]
})
export class AppComponent implements OnInit {

  title = 'MyHome';
  actualCoordinates : Coordinate[] = [{'x':new Date , 'y':0}];

  constructor(private chartDataGetter : ChartDataGetterService) {}

  public ngOnInit() : void {
    let chartData : ChartDataGetterService = this.chartDataGetter;
    chartData.getChartList()
          .then(data => console.log(data.capteurs));
    chartData.getChartData(20170701,20170703,"Wmin",3,'wattmeter1ch')
          .then(data => this.setChartData(data)).catch(this.handleError);
  }

  private setChartData(coord : Coordinate[]){
    this.lineChartData = coord;
  }

  private handleError(error: any): Promise<any> {
  console.error('Une erreur est survenue!', error); // for demo purposes only
  return Promise.reject(this.actualCoordinates);
  }

  // lineChart
  public lineChartData:Array<any> = [{data: []}];

  public lineChartData2:Array<any> = [{data: []}];

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
