import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { ForgotPasswordFormComponent } from './authentication/forgot-password-form/forgot-password-form.component'


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "register"},
  {path: 'login', component: LoginFormComponent },
  {path: 'register', component: RegisterFormComponent },
  {path: 'forgot-password', component: ForgotPasswordFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
