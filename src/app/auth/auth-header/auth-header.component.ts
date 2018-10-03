import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.sass']
})
export class AuthHeaderComponent implements OnInit {
	user: User = {
		name: 'Brett K'
	};

  constructor() { }

  ngOnInit() {
  }

}
