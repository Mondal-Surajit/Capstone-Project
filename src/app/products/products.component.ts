import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import * as uuid from 'uuid';

import {ProductDeleteComponent} from './product-delete/product-delete.component'
import { Router } from '@angular/router';


 
@Component({ 
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
  myForm: FormGroup;
   id:string[]=[];
  i:number=0;
  show : boolean=true;
  pname : boolean=true;
  pdesc : boolean=true;
  pmanu : boolean=true;
  pprice : boolean=true;
  pqty: boolean=true;

  selected: boolean=true;
  
  @ViewChild(ProductDeleteComponent ,  { static: true }) child: ProductDeleteComponent;
  
  ngViewInit() {
    this.child.selected = this.selected;
  }

  constructor( private fb: FormBuilder,private productsService: ProductsService, private _fb: FormBuilder,
    private router : Router) { 
    
  }

 
    

showMenu() {
 
this.show? this.show=false:this.show=true
 
    }
 
name() {this.pname? this.pname=false:this.pname=true }
 
desc() {this.pdesc? this.pdesc=false:this.pdesc=true}
 
manu () {this.pmanu? this.pmanu=false:this.pmanu=true}
 
price() {this.pprice? this.pprice=false:this.pprice=true}
 
qty() {this.pqty? this.pqty=false:this.pqty=true}


    addId(id){
      
      if(this.id.find(x=>x==id))
       {
        this.id.splice(this.id.indexOf(id),1)
       }
       else{
        this.id.push(id);
       }
      console.log(this.child.selected);
       if (this.id.length===0)
 
       this.child.selected=true;
       
       else
       this.child.selected=false;
        
       console.log(this.child.selected);
    }


  deleteSelected(event){
 
    // console.log("In delete selected");
    // console.log(event);

    if(event == "true")
    {
      
  
        this.productsService.removeProduct(this.id);
        this.getData();

        if(this.id.length==1)
        alert('Selected prodcut is deleted!');
        else
        alert('Selected prodcuts are deleted!');
    }

    

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


