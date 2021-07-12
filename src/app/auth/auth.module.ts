import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
 ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent],
    providers: [AuthService]
})
export class AuthModule { }
