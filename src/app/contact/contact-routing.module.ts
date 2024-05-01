/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { dataResolverService } from '../resolvers/data.resolver.service';
import { ContactComponent } from './contact.component';

const routes: Routes = [

  {path: "", 
  component: ContactComponent, 
  canActivate:[WithoutSaveGuard], 
  resolve: {departaments: dataResolverService}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }*/
