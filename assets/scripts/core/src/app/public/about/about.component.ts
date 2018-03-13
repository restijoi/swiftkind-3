import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

import { TeamService } from '../../commons/services/team.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  team;

  config: SwiperOptions = {
    pagination          : '.swiper-pagination',
    paginationClickable : true,
    nextButton          : '.swiper-button-next',
    prevButton          : '.swiper-button-prev',
    spaceBetween        : 30,
    slidesPerView       : 5
  };

  constructor(
    private ts: TeamService,
  ) { }

  ngOnInit() {
    this.list();
  }

  ngAfterViewInit() { new WOW().init(); }

  list () {
    this.ts.list()
      .then(resp => {
        this.team = resp;
      })
  }

}
