import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expence-form',
  templateUrl: './expence-form.component.html',
  styleUrls: ['./expence-form.component.css']
})
export class ExpenceFormComponent implements OnInit {

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
