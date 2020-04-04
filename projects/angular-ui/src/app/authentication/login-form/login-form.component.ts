import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  public faUserCircle = faUserCircle;
  public faLock = faLock;
  public loginForm: FormGroup;
  public username: string;
  public password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private formHandler: FormBuilder
  ) {  }

  ngOnInit() {
    this.loginForm = this.formHandler.group({
      username: [this.username, [
        Validators.required,
        Validators.minLength(1),
        this.authenticationService.nameValidator()
      ]],
      password: [this.password, [
        Validators.required,
        Validators.minLength(8),
        this.authenticationService.passwordValidator()
      ]]
    });
  }

  onSubmit(authData: any) {
    // Process checkout data here
    // this.items = this.authenticationService.clearCart();
    // this.loginForm.reset();

    console.warn('Your order has been submitted', authData);
  }
}
