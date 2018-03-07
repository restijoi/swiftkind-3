import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class ContactForm {
  form;

  constructor (private fb: FormBuilder) {

    // initialize the form builder and fields
    this.form = this.fb.group({
      name       : [null, [Validators.required, Validators.maxLength(80)]],
      email      : [null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      company    : [null, Validators.maxLength(80)],
      content    : [null, Validators.required],
      budget     : [null, Validators.required],
      start_date : [null, Validators.required],  
    })

  }
}