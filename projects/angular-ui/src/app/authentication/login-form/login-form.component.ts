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
  faUserCircle = faUserCircle;
  faLock = faLock;
  items: any;
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formHandler: FormBuilder,
  ) {
    this.loginForm = this.formHandler.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.loginForm = this.formHandler.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(authData: any) {
    // Process checkout data here
    // this.items = this.authenticationService.clearCart();
    // this.loginForm.reset();

    console.warn('Your order has been submitted', authData);
  }
}
