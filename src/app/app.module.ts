import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule,
         MatInputModule,
         MatNativeDateModule,
       } from '@angular/material';

import { GraphModule } from './GraphModule/graph.module'
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    GraphModule,
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
