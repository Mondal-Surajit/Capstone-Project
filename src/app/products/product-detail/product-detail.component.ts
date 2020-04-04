import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service'
import { IProduct } from '../product.model';
import { Location } from "@angular/common"



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 data : IProduct; 
  id : any;
   

  constructor(private _route : ActivatedRoute,
              private productsService: ProductsService,
              private location : Location
              ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id']; 
    //this.product = this.productsService.getProduct(id);
    this.getOne();
    
    
  } 
  
  getOne() {
      this.productsService.getOne(this.id).subscribe(data => {
          this.data = data;
          this.productsService.addCounter(this.data);
          // console.log(this.newdata)
         
      })

  }

  

  goBack(): void {
    this.location.back();
}

}
