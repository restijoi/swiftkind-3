import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    CarouselModule.forRoot(),
    BrowserModule,
    PublicModule,
    IncludesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
