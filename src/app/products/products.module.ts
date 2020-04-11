import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Reactive Forms
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsService} from './products.service'
import { AddProductGuardService } from './product-add/addproduct-guard.service';
import { ProductGaurdService } from './product-gaurd.service';
import {ProductEditComponent} from './product-edit/product-edit.component'
import { ProductDeleteComponent} from './product-delete/product-delete.component';
import { ChartsComponent } from './charts/charts.component'
import { ChartsModule } from 'ng2-charts';


@NgModule({
    imports: 
    [SharedModule,
      HttpClientModule,
      ChartsModule,
        ProductsRoutingModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  //      BrowserAnimationsModule
    ],
    providers :[ProductsService,AddProductGuardService, ProductGaurdService ],
    declarations: [ProductsComponent, ProductDetailComponent,ProductAddComponent,ProductEditComponent, ProductDeleteComponent, ChartsComponent],
    
  })
  export class ProductsModule { }