import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingAnimationDirective } from 'angular-typing-animation';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent,TypingAnimationDirective ]
})
export class PublicModule { }
