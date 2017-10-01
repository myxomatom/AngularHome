import { Component, OnInit } from '@angular/core';

import { ChartDataGetterService } from './chart-data-getter.service';
import { Coordinate } from './coordinate.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChartDataGetterService]
})
export class AppComponent {

  title = 'MyHome';

}
