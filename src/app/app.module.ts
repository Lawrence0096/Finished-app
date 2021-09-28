import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {CompaniesComponent } from './_components/companies/companies.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainContentModule } from './_components/main-content/main-content.module';




@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
