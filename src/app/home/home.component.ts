import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../_services/identity.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
    this.identitySvc.loggedIn = true;
  }

}
