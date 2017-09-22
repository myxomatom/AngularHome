import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartDataGetterService {

  constructor(private http: Http) { }

  getChartData() : Promise<any> {
    /*  https://home.koenig.website/Ajax/get_data.php?debut=20170921&fin=20170923&donnee=Wmin&capteur=3&type=wattmeter1ch */
    console.log('bonjour du service');
    return this.http.get('https://home.koenig.website/Ajax/get_data.php?debut=20170921&fin=20170923&donnee=Wmin&capteur=3&type=wattmeter1ch')
             .toPromise()
             .then(response => response.json() as any);
  }

}
