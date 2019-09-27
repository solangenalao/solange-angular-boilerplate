import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public identitySvc: IdentityService,
    private router: Router) { }

  ngOnInit() {
    this.identitySvc.loggedIn = !this.identitySvc.loggedIn;
  }
  logout() {
    this.router.navigateByUrl('/login');
  }
}
