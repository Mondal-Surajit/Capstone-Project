import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { FormBuilder, FormGroup, Validators, NgForm, AbstractControl } from '@angular/forms';
import * as uuid from 'uuid';
import { Router, ActivatedRoute } from '@angular/router';



function nameMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length < 3)
		  return { 'minlength': true };
  }
	return null;
}

function descMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length < 10)
		  return { 'minlength': true };
  }
	return null;
}

function manufMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length < 5)
		  return { 'minlength': true };
  }
	return null;
}


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
      
      name: ['', [Validators.required, Validators.minLength(3) , nameMinLength] ],
      desc: ['', [Validators.required, Validators.minLength(10) , descMinLength]],
      manuf: ['', [Validators.required, Validators.minLength(5) , manufMinLength]],
      price:['', [Validators.required, Validators.minLength(1)]],
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


