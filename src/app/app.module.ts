import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,
         MatInputModule,
         MatNativeDateModule,
       } from '@angular/material';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph.component';
import { DatepickerOverview } from './datepicker-overview';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,GraphComponent,DatepickerOverview,
  ],

  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
