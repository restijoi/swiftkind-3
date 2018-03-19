import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryService } from './inquiry.service';
import { TeamService } from './team.service';
import { FeedbackService } from './feedback.service';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [InquiryService, TeamService, FeedbackService, ProjectsService]
})
export class ServicesModule { }
