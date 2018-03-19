import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FEEDBACK } from '../../constants/endpoints';


@Injectable()
export class FeedbackService {

  constructor(
    private http: HttpClient
  ) { }

  list () {
    return this.http.get(FEEDBACK)
      .toPromise()
    ;
  }

}
