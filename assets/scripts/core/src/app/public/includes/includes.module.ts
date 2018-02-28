import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { UIRouterModule } from '@uirouter/angular';


@NgModule({
  imports: [
    CommonModule,
    UIRouterModule
  ],
  declarations: [NavigationComponent, FooterComponent]
})
export class IncludesModule { }
