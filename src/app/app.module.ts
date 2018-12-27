import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './account.service';

// This is an alternate way to provide application wide service: Refer: Logging.service.ts for more info.
// So basically we remove the import here and also the providers entry for this service but also added
// @Injectable to the Logging.service.ts to make it work.
//import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService], //, LoggingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
