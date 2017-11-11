import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,
         MatInputModule,
         MatNativeDateModule,
       } from '@angular/material';

import { GraphLayoutComponent } from './graph-layout.component';
import { GraphComponent } from './graph.component/graph.component';
import { DatepickerComponent } from './datepicker.component/datepicker.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    GraphLayoutComponent,GraphComponent,DatepickerComponent,GraphLayoutComponent
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
