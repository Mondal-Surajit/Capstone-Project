import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { LoginComponent } from './register-login/login/login.component';
import { RegisterComponent } from './register-login/register/register.component';
import {ProfileComponent} from './register-login/profile/profile.component'

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component:LoginComponent},
  {path: 'profile',component:ProfileComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
