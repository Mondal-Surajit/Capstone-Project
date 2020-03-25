
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'

@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
  productOpen = true;
  selectedProduct: undefined;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getData();
  }

   getData() 
   {
    this.productsService.getProducts().subscribe(
      (products:IProduct[]) =>  this.products = products,
      err => console.log(err)
      );
    }

   

    handleFinish(event) {
      if (event && event.prod) {
        // if (this.selectedProduct) {
          // this.productsService.editProduct(this.selectedProduct.id, event.product);
        // } else {

        console.log("INSIDE HANDLE FINISH")
          this.productsService.addProduct(event.prod).subscribe(
            (data:any) => this.getData()
          );
        }
      }

      deleteProduct(id) {
        this.productsService.removeProduct(id).subscribe(
          //() => console.log(`Product with ID = ${id} has been deleted`),
          //(err) => console.log(err)
            (data:any) => this.getData()
        ); 
      }
      

  }


