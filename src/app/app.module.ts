import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { ResultComponent } from './bmicalculator/result/result.component';
import { FormsModule } from '@angular/forms';
import { ResultPipe } from './result.pipe';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BmicalculatorComponent,
    ResultComponent,
    ResultPipe,
    OffersComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
