import { NgModule }       from '@angular/core';
import {AboutComponent} from './about.component';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  imports: [AboutRoutingModule, CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})

export class AboutModule { }