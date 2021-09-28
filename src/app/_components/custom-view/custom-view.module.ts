import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CustomViewComponent } from "./custom-view.component";
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CustomViewRoutingModule } from "./custom-view-routing.module";
import { NamefetchService } from "../../_services/namefetch.service";
import { CustomViewService} from "../../_services/custom-view.service";
import { MainTableService} from "../../_services/main-table.service"
import { MainContentModule } from "../main-content/main-content.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({

    providers: [ ],    
    imports: [
        CommonModule,
        CustomViewRoutingModule,
        MatCardModule,
        MatExpansionModule,
        MatProgressBarModule,
        MainContentModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    declarations: [CustomViewComponent]
})
export class CustomViewModule {}