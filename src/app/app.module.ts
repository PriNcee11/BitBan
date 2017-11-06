import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { DataService } from "./services/DataService.service";

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
