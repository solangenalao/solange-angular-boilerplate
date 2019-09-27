import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: {};
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
    this.model = {};
  }
}
