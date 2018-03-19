import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

import { FeedbackService } from '../../commons/services/feedback.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  feedback;

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  constructor(
    private fbs: FeedbackService
  ) { }

  ngOnInit() {
    this.list();
  }

  ngAfterViewInit() { new WOW().init(); }

  list () {
    this.fbs.list()
      .then(resp => {
        this.feedback = resp;
      })
  }

}