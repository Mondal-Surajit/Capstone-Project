import { Component } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { RegloginService } from './register-login/reglogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capstone';
  isLoading:boolean=true;
  constructor( private _service: RegloginService, private _router:Router) {

    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      else if (event instanceof NavigationEnd || 
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {
          this.isLoading = false;
        }
    }) 
  }

    isLoggedIn() {
      return this._service.isLoggedIn();
    }

    changeToLoginRoute() {
      this._service.logout();
      console.log("Logged Out");
      this._router.navigate(['login']);
    }

   

  }
  




