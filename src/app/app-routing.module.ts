import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyViewComponent } from './_components/companyView.component/companyView.component';
import { MainEventTableComponent } from './_components/mainEventTable.component/mainEventTable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainEventTableComponent},
  {path: 'stranka/:id', component: CompanyViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], providers: []
})
//@ts-ignore
export class AppRoutingModule { }
