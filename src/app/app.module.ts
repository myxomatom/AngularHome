import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { GraphModule } from './GraphModule/graph.module'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    GraphModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
