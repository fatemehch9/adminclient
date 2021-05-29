import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const authroutes: Routes = [
  { path:'auth',
component:AuthComponent,
children:[
  {path:'', component:LoginComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent,pathMatch:'full'}
] },
];
