import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LoginComponent } from './login/login.component';
import { RecoverPwComponent } from './recover-pw/recover-pw.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    Error404Component,
    Error500Component,
    LockScreenComponent,
    LoginComponent,
    RecoverPwComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
