import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private nameRe: RegExp;
  private passwordRe: RegExp;
  private numbersRe: RegExp;
  private messageRe: RegExp;

  constructor() {
    this.nameRe = /^[A-Za-z\s]$/i;
    this.passwordRe = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    this.numbersRe = /^[0-9]$/i;
    this.messageRe = /^[A-Za-z0-9\s!@#\$%\^&\*\.\?]$/i;
  }

  public nameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = this.nameRe.test(control.value);
      return forbidden ? {'forbiddenName': 'Leteers and spaces only.'} : null;
    };
  }

  public passwordValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = this.passwordRe.test(control.value);
      return forbidden ? {'forbiddenPassword': 'The string must contain at least 1 lowercase alphabetical character. The string must contain at least 1 uppercase alphabetical character. The string must contain at least 1 numeric character. The string must contain at least one special character !@#$%^& or *. The string must be eight characters or longer.'} : null;
    };
  }

  public numbersValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = this.numbersRe.test(control.value);
      return forbidden ? {'forbiddenNumbers': {value: control.value}} : null;
    };
  }

  public messageValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = this.messageRe.test(control.value);
      return forbidden ? {'forbiddenMessage': {value: control.value}} : null;
    };
  }
}
