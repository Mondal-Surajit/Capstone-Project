import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import {ProductDeleteComponent} from './product-delete/product-delete.component'


 
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

  constructor( private productsService: ProductsService) { 
    
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
        this.productsService.getProducts().subscribe((data:any[]) => this.getData())

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


