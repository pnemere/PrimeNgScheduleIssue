import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScheduleModule} from 'primeng/schedule';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
