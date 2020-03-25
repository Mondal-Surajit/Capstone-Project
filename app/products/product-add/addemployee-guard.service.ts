import { Injectable } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router'
import { ProductAddComponent } from './product-add.component';

@Injectable()
export class AddProductGuardService implements CanDeactivate<ProductAddComponent> {
    canDeactivate(component: ProductAddComponent): boolean {
        // if (component.addform.dirty && !component.addform.status) {
        //     return confirm('Are you sure you want to leave ?');
        // }
        return true;
    }
}