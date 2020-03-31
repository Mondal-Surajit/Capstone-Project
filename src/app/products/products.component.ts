import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import * as uuid from 'uuid';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
  showFilter: false;
  myForm: FormGroup;
  toppings = new FormControl();
   id:string[]=[];
  i:number=0;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selected: boolean=true;
  
  
  constructor( private fb: FormBuilder,private productsService: ProductsService, private _fb: FormBuilder) { 
    
  }

  
    addId(id){
      
      if(this.id.find(x=>x==id))
       {
        this.id.splice(this.id.indexOf(id),1)
       }
       else{
        this.id.push(id);
       }
      
       if (this.id.length==0)
       this.selected=true;
       else
       this.selected=false;
        
    }


  deleteSelected(){

    this.id.forEach(x=> {this.productsService.removeProduct(x).subscribe(
      (data:any) => 
      this.getData() )})
      console.log("IN DELETE SELECTED")
    
     }

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

    

}


