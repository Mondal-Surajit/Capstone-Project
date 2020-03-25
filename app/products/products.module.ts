import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Reactive Forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsService} from './products.service'
import { AddProductGuardService } from './product-add/addemployee-guard.service';
import { ProductDetailGaurdService } from './product-detail/productdetail-gaurd.service';


@NgModule({
    imports: [HttpClientModule,
        SharedModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers :[ProductsService,AddProductGuardService, ProductDetailGaurdService ],
    declarations: [ProductsComponent, ProductDetailComponent,ProductAddComponent],
    
  })
  export class ProductsModule { }