import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnimalComponent } from './create-animal/create-animal.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAnimalComponent
  }
]


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AnimalRegisterRoutingModule {

}
