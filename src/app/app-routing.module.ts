import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { MainCarComponentComponent } from './Components/main-car-component/main-car-component.component';
import { AuthenticationGuard } from './authentication.guard';
import { EditDeleteCarComponentComponent } from './Components/edit-delete-car-component/edit-delete-car-component.component';
import { CreateComponent } from './Components/create/create.component';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component: LoginComponentComponent},
  {path:'cars', component: MainCarComponentComponent, canActivate: [AuthenticationGuard]},
  {path:'car/:model', component: EditDeleteCarComponentComponent, canActivate: [AuthenticationGuard]},
  {path: 'addcar', component: CreateComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
