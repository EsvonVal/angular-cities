import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*16 queryParams : rec el valor de name q lo estamos pas por parame en nabvar y lo render en  contact form.htm */
interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "departament": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
 

})
export class ContactComponent implements OnInit {

  name!: string

  model: ContactForm = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: ''
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(form: any): void {

    console.log('Form values', form);

  }
}