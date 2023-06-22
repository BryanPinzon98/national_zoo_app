import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./modules/animal-register/animal-register.module').then(m => m.AnimalRegisterModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./modules/manage-animals/manage-animals.module').then(m => m.ManageAnimalsModule)
  },
  {
    path: '**',
    redirectTo: 'register'
  }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
