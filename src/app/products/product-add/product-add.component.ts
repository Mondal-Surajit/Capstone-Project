import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as uuid from 'uuid';
import { Router } from '@angular/router';


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
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
 
  addform: FormGroup;
  showModal: boolean;
  
  submitted:boolean=false ;

  constructor(private _fb: FormBuilder,private _router:Router, private productsService: ProductsService) { }

  
  ngOnInit() {
    this.submitted=false;
    this.addform = this._fb.group({
      
      name: ['', [Validators.required, Validators.minLength(3) , nameMinLength] ],
      desc: ['', [Validators.required, Validators.minLength(10) , descMinLength]],
      manuf: ['', [Validators.required, Validators.minLength(5) , manufMinLength]],
      price:['', [Validators.required, Validators.minLength(1)]],
      qty:['', [Validators.required, Validators.minLength(1)]],
  });
   }

   get f() { return this.addform.controls; }


   back(){
     
     this._router.navigate(['products']);
   }

   onSubmit()
   
   {
    this.submitted = true;
 
    if (this.addform.invalid) {
      return; }

      if(this.submitted)
    {
      let prod = {
        "id":uuid.v4(),
        "name": this.addform.get('name').value,
        "description": this.addform.get('desc').value,
        "manufacturer": this.addform.get('manuf').value,
        "price":this.addform.get('price').value,
        "qty":this.addform.get('qty').value,
        }
    
        this.productsService.addProduct(prod).subscribe(
          (data:any) => {this.productsService.getProducts();
            this._router.navigate(['products']);
          });

     
          
  }



}


}
