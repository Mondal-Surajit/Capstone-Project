import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import * as uuid from 'uuid';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  id:any;
  editProd:IProduct = {
    id:null,
    name: null,
    description: null,
    manufacturer: null,
    price:null,
    qty:null
  };
  submitted = false;
  constructor(private _route : ActivatedRoute,private productsService: ProductsService, private _fb: FormBuilder, private _router:Router) { }

  ngOnInit() {

    this.id = this._route.snapshot.params['id'];
    console.log(this.id)
    this.productsService.getOne(this.id).subscribe(editProd => {this.editProd = editProd});

    this.editForm = this._fb.group({
      
      name: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required, Validators.minLength(10)]],
      manuf: ['', [Validators.required, Validators.minLength(5)]],
      price:['', [Validators.required, Validators.minLength(2)]],
      qty:['', [Validators.required, Validators.minLength(1)]],
  }); 
   }

   get f() { return this.editForm.controls; }


   back(){
     
     this._router.navigate(['products']);
   }

   onSubmit()
   
   {
    this.submitted = true;
 
    if (this.editForm.invalid) {
      return; }

      if(this.submitted)
    {
      let prod = {
        "id":this.id,
        "name": this.editForm.get('name').value,
        "description": this.editForm.get('desc').value,
        "manufacturer": this.editForm.get('manuf').value,
        "price":this.editForm.get('price').value,
        "qty":this.editForm.get('qty').value,
        }
    
        this.productsService.editProduct(prod,this.id).subscribe(
          (data:any) => {this.productsService.getProducts;
          this._router.navigate(['products']);}
        );
        
 
  }

}
}


