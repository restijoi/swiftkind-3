import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TEAM } from '../../constants/endpoints';


@Injectable()
export class TeamService {
  team;

  constructor(
    private http: HttpClient
  ) {
    // get the list of team upon loading
    this.list().then(resp => {
      this.team = resp;
    });
  }

  list () {
    return this.http.get(TEAM)
      .toPromise()
    ;
  }

}
