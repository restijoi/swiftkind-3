import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROJECTS } from '../../constants/endpoints';

@Injectable()
export class ProjectsService {
  projects;

  constructor(
    private http: HttpClient
  ) {
    // get the list of projects upon loading
    this.list().then(resp => {
      this.projects = resp;
    });
  }

  list () {
    return this.http.get(PROJECTS)
      .toPromise()
    ;
  }

}
