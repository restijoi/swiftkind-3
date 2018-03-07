import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';
import { SwiperModule } from 'angular2-useful-swiper';

import { ServicesModule } from './commons/services/services.module';
import { PublicModule } from './public/public.module';
import { IncludesModule } from './public/includes/includes.module';

import { appStates } from './states/app.states';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UIRouterModule.forRoot({otherwise: '/', states: appStates}),
    HttpClientModule,
    SwiperModule,
    BrowserModule,
    PublicModule,
    IncludesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
