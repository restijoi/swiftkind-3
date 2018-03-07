import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WOW } from 'wowjs/dist/wow.min';

import { ContactForm } from '../../structs/contact.struct';
import { InquiryService } from '../../commons/services/inquiry.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  form;

  constructor(
    private fb : FormBuilder,
    private inquiry : InquiryService
  ) { }

  ngAfterViewInit() { new WOW().init(); }

  ngOnInit() {
    this.form = new ContactForm(this.fb).form;
  }

  fieldIsValid (field) {
    return !(!this.form.get(field).valid && this.form.get(field).touched);
  }

  send () {
    this.inquiry.send(this.form.value)
      .then(resp => {
        console.log('message sent');
      });
  }

}
