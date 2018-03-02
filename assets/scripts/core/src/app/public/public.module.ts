import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { SwiperModule } from 'angular2-useful-swiper';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProcessComponent } from './process/process.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule,
    SwiperModule
  ],
  declarations: [IndexComponent, TypingAnimationDirective, AboutComponent, ProcessComponent, WorksComponent]
})
export class PublicModule { }
