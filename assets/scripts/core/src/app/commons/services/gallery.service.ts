import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GALLERY } from '../../constants/endpoints';


@Injectable()
export class GalleryService {
  public gallery;

  constructor(
    private http: HttpClient
  ) {
    // get the list of project mockups
    this.list().then(resp => {
      this.gallery = resp;
    });
  }

  list () {
    return this.http.get(GALLERY)
      .toPromise()
    ;
  }

  detail (slug) {
    return this.http.get(GALLERY + slug + '/')
      .toPromise()
  }
}
