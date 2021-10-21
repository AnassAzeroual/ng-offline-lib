import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgOfflineComponent, NgOfflineDirective, NgOnlineDirective } from './ngoffline.component';


const features = [
  NgOfflineComponent,
  NgOfflineDirective,
  NgOnlineDirective
]
@NgModule({
  declarations: [...features],
  imports: [BrowserModule],
  exports: [...features]
})
export class NgofflineModule { }
