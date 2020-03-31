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
import { ProductGaurdService } from './product-gaurd.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {ProductEditComponent} from './product-edit/product-edit.component'

@NgModule({
    imports: [HttpClientModule,
        SharedModule,
        NgMultiSelectDropDownModule.forRoot(),
        ProductsRoutingModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        BrowserAnimationsModule
    ],
    providers :[ProductsService,AddProductGuardService, ProductGaurdService ],
    declarations: [ProductsComponent, ProductDetailComponent,ProductAddComponent,ProductEditComponent],
    
  })
  export class ProductsModule { }