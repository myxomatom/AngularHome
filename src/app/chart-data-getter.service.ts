import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Coordinate } from './coordinate.class';

@Injectable()
export class ChartDataGetterService {

  url : string;
  rootUrl : string = 'http://home.myxomatom.dev/Ajax/';
  objUrl : {debut : number, fin: number,
            donnee : string, capteur: number, type : string}

  constructor(private http: Http) { }

  getChartList() :Promise<any> {
    return this.http.get(this.forgeUri("get_graph.php?",null))
             .toPromise()
             .then(response => response.json() as Coordinate[]);
  }

  getChartData( debut : number, fin : number,
                donnee : string, capteur : number, type : string) : Promise<any> {
    this.objUrl ={ debut : debut, fin : fin,
                  donnee : donnee, capteur : capteur, type : type }
    return this.http.get(this.forgeUri("get_data.php?",this.objUrl))
             .toPromise()
             .then(response => response.json() as Coordinate[]);
  }

  private forgeUri(file,param) : string {
    this.url = this.rootUrl + file;
    for (let key in param){
        this.url += `${key}=${this.objUrl[key]}&`
    }
    return this.url
  }
}
