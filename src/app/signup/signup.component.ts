import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../_services/identity.service';
import { Router } from '@angular/router';
import { SignupData } from '../_models/signupData';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupData: SignupData = {
    nameOrCompany: null,
    inputCPF: null,
    phoneNumber: null,
    inputEmail: null,
    inputPassword: null,
    inputCEP: null,
    logradouro: null,
    inputNumber: null,
    bairro: null,
  };
  public type = 'password';
  public show = false;

  public submitted = false;


  constructor(public identitySvc: IdentityService,
              private router: Router) { }

  ngOnInit() {
    this.identitySvc.loggedIn = false;
    this.resetForm();
  }

  login() {
    this.router.navigateByUrl('/home');
    this.identitySvc.loggedIn = true;
  }

  logout() {
    this.identitySvc.loggedIn = false;
  }

  resetForm() {
    this.signupData = {
      nameOrCompany: '',
      inputCPF: '',
      phoneNumber: '',
      inputEmail: '',
      inputPassword: '',
      inputCEP: '',
      logradouro: '',
      inputNumber: '',
      bairro: '',
    };
  }

  toggleShowPassword() {
    this.show = !this.show;
    this.show ? this.type = 'text' : this.type = 'password';
  }

}
