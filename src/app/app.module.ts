import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenceFormComponent } from './expence-form/expence-form.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component:  DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardHomeComponent
      },
      {
        path: 'home',
        component: DashboardHomeComponent
      },
      {
        path: 'expenses',
        component: ExpenceFormComponent
      },
      {
        path: 'search',
        component: DashboardHomeComponent
      },
      {
        path: 'report',
        component: DashboardHomeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenceFormComponent,
    DashboardComponent,
    DashboardHomeComponent,
    SigninSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
