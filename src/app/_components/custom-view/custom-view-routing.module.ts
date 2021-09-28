import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomViewComponent } from "./custom-view.component";


const routes: Routes =  [ 
    {
    path: '', component: CustomViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
//@ts-ignore
export class CustomViewRoutingModule {}