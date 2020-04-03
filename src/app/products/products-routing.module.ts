import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductGuardService } from './product-add/addemployee-guard.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGaurdService } from './product-gaurd.service';
import { ProductEditComponent } from './product-edit/product-edit.component'
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const prodRoutes: Routes = [
  
      { path: '', component: ProductsComponent ,},
      { path: 'add', component: ProductAddComponent ,
      canActivate: [ProductGaurdService],
      canDeactivate: [AddProductGuardService]},
      { path: ':id', component: ProductDetailComponent,
      canActivate: [ProductGaurdService] },
      { path: 'edit/:id', component: ProductEditComponent,
      canActivate: [ProductGaurdService] }
      
      
      
  
  
];
  
@NgModule({
  imports: [ 
    RouterModule.forChild(prodRoutes)
  ],
  exports: [ RouterModule ],
  

})

export class ProductsRoutingModule { }
