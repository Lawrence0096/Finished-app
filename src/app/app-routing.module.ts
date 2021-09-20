import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomViewComponent } from './_components/custom-view/custom-view.component';
import { MainTableComponent } from './_components/main-table/main-table.component';
import { MainContentComponent } from './_components/main-content/main-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainContentComponent},
  {path: 'detail', component: CustomViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
