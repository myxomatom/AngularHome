import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Coordinate } from './coordinate.class';

@Injectable()
export class ChartDataGetterService {

  url : string;
  rootUrl : string = 'http://home.myxomatom.dev/Ajax/get_data.php?';
  debut : number = 20170701;
  fin : number = 20170703;
  donnee : string = 'Wmin';
  capteur: number = 3;
  type : string = 'wattmeter1ch';

  constructor(private http: Http) { }

  getChartData() : Promise<any> {
    return this.http.get(this.forgeUri())
             .toPromise()
             .then(response => response.json() as Coordinate[]);
  }

  private forgeUri() : string {
    this.url =  this.rootUrl +
                'debut=' + this.debut + '&' +
                'fin=' + this.fin + '&' +
                'donnee=' + this.donnee + '&' +
                'capteur=' + this.capteur +'&' +
                'type=' + this.type;
    return this.url;

  }
}
