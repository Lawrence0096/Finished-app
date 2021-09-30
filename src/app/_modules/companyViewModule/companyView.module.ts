import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CompanyViewComponent } from "./companyView.component";
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CustomViewRoutingModule } from "./company-view-routing.module";
import {MatSortModule} from '@angular/material/sort';
import { TableModule } from "../tableModule/table.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';


@NgModule({

    providers: [ ],    
    imports: [
        CommonModule,
        CustomViewRoutingModule,
        MatCardModule,
        MatExpansionModule,
        MatProgressBarModule,
        TableModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,    
    ],
    declarations: [CompanyViewComponent]
})
export class CompanyViewModule {}