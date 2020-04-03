import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';
import {IProduct} from '../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  //id:string[]=[];
  id:number=0;
  selected: boolean=true;
  del: string;
  products: IProduct[];
  @Output() finish = new EventEmitter();
  show = true;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    
  }


 

  delete() { 
    console.log("In delete component");
    this.del="true";
    this.finish.emit(this.del);
    console.log(this.show); 
    this.show=false;
    

  }


}
