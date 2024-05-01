import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departaments=["ventas", "marketing", "other"]
@Injectable({providedIn: "root"})
export class dataResolverService implements Resolve<any>{
    resolve(): Observable<any>{
        //ToDo el of convierte el array en un 
        return of(departaments)
}
}