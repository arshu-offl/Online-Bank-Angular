import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequebookRequestComponent } from './chequebook-request/chequebook-request.component';
import { HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ChequebookRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
