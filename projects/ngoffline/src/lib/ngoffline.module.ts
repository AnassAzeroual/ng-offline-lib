import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOfflineComponent, NgOfflineDirective } from './ngoffline.component';



@NgModule({
  declarations: [
    NgOfflineComponent,
    NgOfflineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgOfflineComponent,
    NgOfflineDirective
  ]
})
export class NgofflineModule { }
