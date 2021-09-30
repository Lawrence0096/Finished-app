import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MainEventTableComponent } from "./mainEventTable.component/mainEventTable.component";
import { TableComponent } from "./table.component/table.component";
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
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
    exports: [MainEventTableComponent, TableComponent],
    declarations: [TableComponent, MainEventTableComponent]
})

export class TableModule {}