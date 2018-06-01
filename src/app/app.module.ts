import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import {CustomDropdownComponent} from './custom-dropdown/custom-dropdown.component';
export const appRoutes: Routes = [];
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule],
  declarations: [ AppComponent , CustomDropdownComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

