import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CompanyViewComponent } from "./companyView.component";


const routes: Routes =  [ 
    {
    path: '', component: CompanyViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
//@ts-ignore
export class CustomViewRoutingModule {}