import { NgModule } from '@angular/core';

import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { AnimalRegisterRoutingModule } from './animal-register-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateAnimalComponent
  ],
  imports: [
    AnimalRegisterRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ]
})
export class AnimalRegisterModule {

}
