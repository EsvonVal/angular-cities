import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>
  <p>counter: {{counterRender()}}</p>`,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() color!:string
  @Input() label!: string

  constructor() { }

  ngOnInit(): void {
  }

  counterRender(): boolean{
    console.log("Render button")
    return true;
  }

}
