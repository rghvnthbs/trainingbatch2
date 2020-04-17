import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { PricingSection } from './pricing/pricing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot (appRoutes) ],
  declarations: [ AppComponent,
    LoginSection, PricingSection ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
