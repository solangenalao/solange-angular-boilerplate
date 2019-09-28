import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../_services/identity.service';
import { Router } from '@angular/router';
import { LoginData } from '../_models/loginData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: LoginData = {
    email: null,
    password: null
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
    this.loginData = {
      email: '',
      password: ''
    };
  }

  toggleShowPassword() {
    this.show = !this.show;
    this.show ? this.type = 'text' : this.type = 'password';
  }

}
