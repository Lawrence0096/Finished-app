import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MainContentComponent } from "./main-content.component";
import { MainTableComponent } from "./main-table/main-table.component";

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MainContentRoutingModule } from "./main-content-routing.module";



import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({

    imports: [
        CommonModule,        
        MatCardModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MainContentRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatSortModule,
        ReactiveFormsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTabsModule
    ],
    exports: [MainContentComponent, MainTableComponent],
    declarations: [MainTableComponent, MainContentComponent]
})

export class MainContentModule {}