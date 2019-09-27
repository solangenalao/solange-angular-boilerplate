import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public identitySvc: IdentityService) { }

  ngOnInit() {
    this.identitySvc.loggedIn = !this.identitySvc.loggedIn;
  }

}
