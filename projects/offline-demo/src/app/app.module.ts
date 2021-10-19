import { NgofflineModule } from './../../../ngoffline/src/lib/ngoffline.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgofflineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
