import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { PrototypeComponent } from './prototype/prototype.component';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    PrototypeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckoutModule,
    NgbModule,
    SharedModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
   ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
