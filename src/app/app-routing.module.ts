import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { resolve } from 'path';
import { dataResolverService } from './resolvers/data.resolver.service';

const routes: Routes = [
  {path: "" ,redirectTo: "/home" , pathMatch: "full"},
  {path: "contact-template", component: ContactComponent, canActivate:[WithoutSaveGuard], 
  resolve: {departaments: dataResolverService}
  },
  /*para q sepa el m prin lo q neceita para vargar este compo agrg los sgt
  {path: "contact-template", 
  loadChildren: ()=> 
    import("./contact/contact.component").then(m=> m.ContactComponent)
  },*/
  {path: "contact-reactive", component: ContactReactiveComponent},
  {path: "home", component: HomeComponent},
  {path: "users", component: UserComponent, canActivate:[PermissionsGuard],/*vamos a prot con guardas #16*/
  children:[
    {path: "details", component: DetailsComponent},
    {path: "list", component: ListComponent},
    {path: "user", component: UserComponent}
  ]},
  /*esto se mostrara si ninguna de las rutas coinciden y po lo tan deb ir al final , sino se va mostra prim*/
  {path: "**", component: PagenotfoundComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
