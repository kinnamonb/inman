import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { InventoryComponent } from './auth/inventory/inventory.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/landing',
		pathMatch: 'full'
	},
	{
		path: 'landing',
		component: LandingComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'inventory',
		component: InventoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
