import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEventTableComponent } from './_modules/tableModule/mainEventTable.component/mainEventTable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainEventTableComponent},
  //{path: 'customer/:id', component: CustomViewComponent }
  {path: 'stranka/:id', loadChildren: ()=> import
  ('./_modules/companyViewModule/companyView.module').then(m => m.CompanyViewModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], providers: []
})
//@ts-ignore
export class AppRoutingModule { }
