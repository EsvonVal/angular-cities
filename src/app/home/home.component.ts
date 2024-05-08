import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  title = 'practica-angular';
  selection!: City;
  cities: City []=  []
  
  //h la iny de n service
  constructor(private readonly dataSvs: DataService){
  }
// esta es rpt de la peticion 
  ngOnInit(): void {
    this.dataSvs.getCities()
    .subscribe(rpt =>{
      this.cities= [...rpt]
    }
    )
    
  }
  
  color!: string;
  label!: string; 
/*para agreg a nuest array dinamic desd nuestr formulario*/

addNewCity(city: string): void{
this.dataSvs.addNewCity(city).subscribe(res =>{
  this.cities.push(res)
})

}

  onCitySelected(city : City): void {
   console.log(city)
   this.selection=city
  };

  onCityDelete(id: string){
    if(confirm("Are You Sure")){}
   this.dataSvs.deleteCity(id).subscribe(()=>{
    const arrayTemp= this.cities.filter(city=> city._id !== id);
    this.cities= [...arrayTemp]
   })
  }
 



  onClear() : void {
this.selection= {
  _id:  "",
  name:  ""
    
};
  }

  updateCity(city: City){
    this.dataSvs.updateCity(city).subscribe(res=>{
      const arrayTemp= this.cities.filter(item=> item._id !== city._id);
      this.onClear();
 })

  }


}

/*
  onSearch() :void{
    console.log("onSearch")
  }*/
  
  


