import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import * as uuid from 'uuid';

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
  showModal: boolean;
  editForm: FormGroup;
  submitted = false;
  id:any;
  constructor(private productsService: ProductsService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.getData();

    this.editForm = this._fb.group({
      
      name: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required, Validators.minLength(10)]],
      manuf: ['', [Validators.required, Validators.minLength(5)]],
      price:['', [Validators.required, Validators.minLength(2)]],
      qty:['', [Validators.required, Validators.minLength(1)]],
  });
  }
  get f() { return this.editForm.controls; }

  hide()
  {
    this.showModal = false;
  }


   getData() 
   {
    this.productsService.getProducts().subscribe(
      (products:IProduct[]) =>  this.products = products,
      err => console.log(err)
      );
    }

    showedit(id: any){
      this.showModal = true;
      this.id=id;
      console.log(this.productsService.getProduct(id));
      
    }

    handleFinish(event: { prod: any; }) {
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

      deleteProduct(id: any) {
        this.productsService.removeProduct(id).subscribe(
          //() => console.log(`Product with ID = ${id} has been deleted`),
          //(err) => console.log(err)
            (data:any) => this.getData()
        ); 
      }

      onClick(id: any){
        
      }


onSubmit()
  {
      this.submitted = true;
      if (this.editForm.invalid) {
      return;
      }
      
      if(this.submitted)
      {
        this.showModal = false;
        let prod = {
          "id":this.id,
          "name": this.editForm.get('name').value,
          "description": this.editForm.get('desc').value,
          "manufacturer": this.editForm.get('manuf').value,
          "price":this.editForm.get('price').value,
          "qty":this.editForm.get('qty').value,
          }
        this.productsService.editProduct(prod,this.id).subscribe(
          (data:any) => this.getData()
        );
      }

  }
}


