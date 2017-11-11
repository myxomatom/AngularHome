import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,
         MatInputModule,
         MatNativeDateModule,
       } from '@angular/material';

import { GraphLayoutComponent } from './graph.component';
import { GraphComponent } from './graph.component/graph.component';
import { DatepickerOverview } from './datepicker.component/datepicker-overview';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    GraphLayoutComponent,GraphComponent,DatepickerOverview,GraphLayoutComponent
  ],
  exports:[GraphLayoutComponent],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule],

})
export class GraphModule { }
