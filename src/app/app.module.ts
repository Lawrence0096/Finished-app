import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomerDetailComponent } from './customer-detail.component/customer-detail..component';
import { TableComponent } from './_components/table.component/table.component';
import { EventsComponent } from './events.component/events.component';
import { ListComponent } from './_components/list.component/list.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component/login.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RefreshRateSliderComponent } from './_components/refresh-rate-slider/refresh-rate-slider.component';
import { UserbarComponent } from './_components/userbar/userbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    TableComponent,
    EventsComponent,
    ListComponent,
    LoginComponent,
    DashboardComponent,
    SettingsMenuComponent,
    RefreshRateSliderComponent,
    UserbarComponent,
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
    MatFormFieldModule,
    MatExpansionModule,
    MatSliderModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
