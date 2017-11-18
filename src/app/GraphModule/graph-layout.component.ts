import { Component, OnInit } from '@angular/core';

import { ChartDataGetterService } from './chart-data-getter.service/chart-data-getter.service';
import { Coordinate } from './graph.component/coordinate.class';

@Component({
  selector: 'graph-layout',
  templateUrl: './graph-layout.component.html',
  providers: [ChartDataGetterService]
})
export class GraphLayoutComponent {

  constructor(private chartDataGetter : ChartDataGetterService) {}

  actualCoordinates : Coordinate[] = [{'x':new Date , 'y':0}];
  private sensorList : any = [];
  private refreshGraphID : number;
  public lineChartData : Array<any> = [];
  
  ngOnInit(){
    let chartData : ChartDataGetterService = this.chartDataGetter;
    chartData.getChartList()
          .then(data =>  this.populateChartList(data.capteurs));
  }

  private setChartData(coord : Coordinate[]){
      let coordonnees = [{'data' : coord}];
      this.lineChartData.push(coordonnees);
  }

  private refreshChartData(coord : Coordinate[],index : number){
    if (coord.length > 0){
      let coordonnees = [{'data' : coord}];
      this.lineChartData[index] = coordonnees;
    }
  }

  private populateChartList(sensors:any){
    for (let sensor of sensors) {
      let mesures = sensor[2][0].split(" ");
      for (let mesure of mesures){
        this.sensorList.push([mesure,sensor[0],sensor[1]]);
        let now = new Date();
        let yesterday = now.getDate()-1 + (now.getMonth()+1)*100 + now.getFullYear()*10000;
        let tomorrow = now.getDate()+1 + (now.getMonth()+1)*100 + now.getFullYear()*10000;
        this.chartDataGetter.getChartData(yesterday,tomorrow,mesure,sensor[0],sensor[1])
              .then(data => this.setChartData(data)).catch(this.handleError);
      }
    }
  }
  private handleError(error: any): Promise<any> {
    console.error('Une erreur est survenue!', error); // for demo purposes only
    return Promise.reject(this.actualCoordinates);
  }
  public dateUpdated(data:any) {
   this.refreshGraphID = data.graphID;
   let debut = data.debut.getDate() + (data.debut.getMonth()+1)*100 + data.debut.getFullYear()*10000;
   let fin = data.fin.getDate() + (data.fin.getMonth()+1)*100 + data.fin.getFullYear()*10000;
   let mesure = this.sensorList[this.refreshGraphID][0];
   let idCapteur = this.sensorList[this.refreshGraphID][1];
   let typeCapteur = this.sensorList[this.refreshGraphID][2];

   this.chartDataGetter.getChartData(debut,fin,mesure,idCapteur,typeCapteur)
         .then(data => this.refreshChartData(data,this.refreshGraphID)).catch(this.handleError);
  }
}
