import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail.component/customer-detail..component';
import { EventsComponent } from './events.component/events.component';
import { LoginComponent } from './login.component/login.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { AuthGuardService } from './_services/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: EventsComponent
   },
   {
      path: 'stranka/:id',
      component: CustomerDetailComponent
   }
  ]},
  
  //{path: 'home', component: EventsComponent},
  //{path: 'stranka/:id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], providers: []
})
//@ts-ignore
export class AppRoutingModule { }
