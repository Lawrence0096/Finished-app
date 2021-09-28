import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './_components/main-content/main-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainContentComponent},
  //{path: 'customer/:id', component: CustomViewComponent }
  {path: 'customer', loadChildren: ()=> import
  ('./_components/custom-view/custom-view.module').then(m => m.CustomViewModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], providers: []
})
//@ts-ignore
export class AppRoutingModule { }
