import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Coordinate } from './coordinate.class';

@Injectable()
export class ChartDataGetterService {

  url : string;
  rootUrl : string = 'https://home.koenig.website/Ajax/get_data.php?';
  debut : number = 20170922;
  fin : number = 20170923;
  donnee : string = 'Wmin';
  capteur: number = 3;
  type : string = 'wattmeter1ch';

  constructor(private http: Http) { }

  getChartData() : Promise<any> {
    /*  https://home.koenig.website/Ajax/get_data.php?debut=20170921&fin=20170923&donnee=Wmin&capteur=3&type=wattmeter1ch */
    return this.http.get(this.forgeUri())
             .toPromise()
             .then(response => response.json() as Coordinate[]);
  }

  private forgeUri() : string {
    this.url = this.rootUrl +
                'debut=' + this.debut + '&' +
                'fin=' + this.fin + '&' +
                'donnee=' + this.donnee + '&' +
                'type=' + this.type;
    return this.url;
  }
}
