import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageAnimalsComponent } from "./manage-animals/manage-animals.component";

const routes: Routes = [
  {
    path: '',
    component: ManageAnimalsComponent
  }
]


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ManageAnimalsRoutingModule {

}
