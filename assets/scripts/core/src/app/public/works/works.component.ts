import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

import { ProjectsService } from '../../commons/services/projects.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {

  constructor(
    private ps: ProjectsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() { new WOW().init(); }

}
