import { Component, OnInit } from '@angular/core';

import { ChartDataGetterService } from './chart-data-getter.service/chart-data-getter.service';
import { Coordinate } from './graph.component/coordinate.class';

@Component({
  selector: 'graph-layout',
  templateUrl: './graph.component.html',
  providers: [ChartDataGetterService]
})
export class GraphLayoutComponent {

}
