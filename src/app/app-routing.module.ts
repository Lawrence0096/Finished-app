import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail.component/customer-detail..component';
import { EventsComponent } from './events.component/events.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
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
