import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainService } from './mainService';
import { productServiceIT } from './injection-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [MainService],//DI token -Default Type Token
  providers: [{provide:productServiceIT,useClass:MainService}],//DI token -Default Type Token
  bootstrap: [AppComponent]
})
export class AppModule { }
