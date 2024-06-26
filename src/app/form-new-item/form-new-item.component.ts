import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';


@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent  {
  @Input() className="btn-primary";
  @Input() label!:string
  @Input() selection!: City
/*comunicamos del hijo al padre mediante output*/
  @Output() newItemEvent= new EventEmitter();
  @Output() updateItemEvent = new EventEmitter();

  onAddNewItem(item:string){
    this.newItemEvent.emit(item)

  }
  /*
  counterRender(): boolean{
    console.log("Render Form")
    return true;
  }*/

  onupdateItem(item: City, change: string): void{
   /* console.log(change)
    console.log(item)*/
    const city: City = {
      _id: item._id,
      name: change

    }
    this.newItemEvent.emit(item);

  }
  
  }

