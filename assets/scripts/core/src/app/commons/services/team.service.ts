import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TEAM } from '../../constants/endpoints';


@Injectable()
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  list () {
    return this.http.get(TEAM)
      .toPromise()
    ;
  }

}
