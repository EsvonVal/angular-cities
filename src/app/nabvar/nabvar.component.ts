import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
/*#16 rutas hijas*/
@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  goToReactive(): void{
    this.router.navigate(["contact-reactive"], {queryParams: {name:"esvon"}})
  //}
  /*
  goToReactive(): void{
    this.router.navigate(["contact-reactive"], {queryParams: {name:"esvon"}})*/
  }


}
