import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {
  faUserCircle = faUserCircle;
  faLock = faLock;
  items: any;
  registerForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formHandler: FormBuilder,
  ) {
    this.registerForm = this.formHandler.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.registerForm = this.formHandler.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(authData: any) {
    // Process checkout data here
    // this.items = this.authenticationService.clearCart();
    // this.loginForm.reset();

    console.warn('Your order has been submitted', authData);
  }
}
