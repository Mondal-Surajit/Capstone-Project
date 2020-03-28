import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductGuardService } from './product-add/addemployee-guard.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailGaurdService } from './product-detail/productdetail-gaurd.service';


const prodRoutes: Routes = [
  { 
    path: 'products', 
    children: [
      { path: '', component: ProductsComponent ,
      canDeactivate: [AddProductGuardService]},
      { path: 'add', component: ProductsComponent ,
      canDeactivate: [ProductAddComponent]},
      { path: ':id', component: ProductDetailComponent,
      canActivate: [ProductDetailGaurdService] },
    ] 
  }
  
];

@NgModule({
  imports: [ 
    RouterModule.forChild(prodRoutes)
  ],
  exports: [ RouterModule ],
  

})

export class ProductsRoutingModule { }
