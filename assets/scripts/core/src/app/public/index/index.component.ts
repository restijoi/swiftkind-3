import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

import { FeedbackService } from '../../commons/services/feedback.service';
import { ProjectsService } from '../../commons/services/projects.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  constructor(
    private fbs: FeedbackService,
    private ps: ProjectsService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() { new WOW().init(); }

}