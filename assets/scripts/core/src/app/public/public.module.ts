import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [IndexComponent, TypingAnimationDirective]
})
export class PublicModule { }
