import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  name!: string

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute) { 
    this.route.queryParams.subscribe(
    (params)=>{
      this.name = params["name"]
    }
    )
  }

  ngOnInit(): void {
  }

}
