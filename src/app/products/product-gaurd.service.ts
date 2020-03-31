import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegloginService } from '../register-login/reglogin.service'

@Injectable()
export class ProductGaurdService implements CanActivate {
    constructor(private _service: RegloginService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(`Can ${state.url} be activated ?`);
        if (this._service.isLoggedIn()) {
            console.log("Yes, the route can be activated as we are already logged in.");
            return true;
        }
        else {
            console.log("CANNOT ACTIVATE the route until logged in...");
            this._router.navigate(['login']);
            return false;
        }
    }
}