import { Component, OnInit } from '@angular/core';
import { UIRouter } from '@uirouter/angular/';

import { ProjectsService } from '../../commons/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private project: any;
  private params : any;

  constructor(
    private ps: ProjectsService,
    private uirouter: UIRouter
  ) {
    // UI ROUTER parameters
    this.params = this.uirouter.globals.params;

    this.getDetail();
  }

  ngOnInit() {}

  getDetail () {
    this.ps.detail(this.params.projectId)
      .then(resp => {
        this.project = resp;
      })

  }

}
