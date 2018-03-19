import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FEEDBACK } from '../../constants/endpoints';


@Injectable()
export class FeedbackService {
  feedback;

  constructor(
    private http: HttpClient
  ) {
    // get the list of feedback upon load
    this.list()
      .then(resp => {
        this.feedback = resp;
      })
  }

  list () {
    return this.http.get(FEEDBACK)
      .toPromise()
    ;
  }

}
