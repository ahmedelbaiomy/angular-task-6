import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { InActiveComponent } from './components/in-active/in-active.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InActiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
