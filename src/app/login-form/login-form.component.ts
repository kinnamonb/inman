import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
	loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	})

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	console.log(`Login with ${this.loginForm.value.username} and ${this.loginForm.value.password}`)
  }

}
