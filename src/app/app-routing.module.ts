import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { UserDashboardComponent } from './pages/employee/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { EmployeeGuard } from './services/employee.guard';

const routes: Routes = [
  {path:'signup',component: SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'admin',component:DashboardComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path:'user',component:UserDashboardComponent,pathMatch:'full',canActivate:[EmployeeGuard]},
  {path:'dashboard',component:UserDashboardComponent,pathMatch:'full',canActivate:[EmployeeGuard,AdminGuard]},
  {path:'aboutus',component:AboutusComponent,pathMatch:'full'},
  {path:'contactus',component:ContactusComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
