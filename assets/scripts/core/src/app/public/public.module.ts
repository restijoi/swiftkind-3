import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule,
    CarouselModule
  ],
  declarations: [IndexComponent, TypingAnimationDirective, AboutComponent]
})
export class PublicModule { }
