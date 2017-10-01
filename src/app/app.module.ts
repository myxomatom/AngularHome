import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph.component';
import { NgbdDatepickerBasic } from './datepicker-basic';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,GraphComponent,NgbdDatepickerBasic
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
