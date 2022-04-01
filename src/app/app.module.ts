import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlajuelaComponent } from './alajuela/alajuela.component';
import { InfoLugar1Component } from './info-lugar1/info-lugar1.component';

@NgModule({
  declarations: [
    AppComponent,
    AlajuelaComponent,
    InfoLugar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
