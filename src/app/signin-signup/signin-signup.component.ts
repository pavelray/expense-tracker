import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {

  toggleLogin: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.toggleLogin = true;
  }

  toggle() {
    this.toggleLogin = !this.toggleLogin;
  }

  login() {
    //
    this.router.navigate(['dashboard']);
  }

  signup() {
    //
  }

}
