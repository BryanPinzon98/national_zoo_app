import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { ManageAnimalsRoutingModule } from "./manage-animals-routing.module";

import { ManageAnimalsComponent } from './manage-animals/manage-animals.component';


@NgModule({
  declarations: [
    ManageAnimalsComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ManageAnimalsRoutingModule,
  ]
})
export class ManageAnimalsModule {

}
