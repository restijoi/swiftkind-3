import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIRouterModule } from '@uirouter/angular';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { SwiperModule } from 'angular2-useful-swiper';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProcessComponent } from './process/process.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  declarations: [IndexComponent, TypingAnimationDirective, AboutComponent, ProcessComponent, WorksComponent, ContactComponent]
})
export class PublicModule { }
