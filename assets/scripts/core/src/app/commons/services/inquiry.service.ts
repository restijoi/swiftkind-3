import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INQUIRIES } from '../../constants/endpoints';


@Injectable()
export class InquiryService {

  constructor(
    private http : HttpClient
  ) { }


  send (data) {
    return this.http.post(INQUIRIES, data)
      .toPromise()
    ;
  }

}
