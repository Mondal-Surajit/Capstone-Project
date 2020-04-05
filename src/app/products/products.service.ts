import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';
import { IProduct } from './product.model';
import { map } from 'rxjs/operators';

 
export interface Count {
  id: string;
  name:string;
  counter:number;
}

@Injectable()
export class ProductsService {
   url = "http://localhost:3000/products";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    newdata:Count;
    counts:Count[] =  [];
   count:number[]=[];
    

    constructor (private _http: HttpClient) { }

    ngOnit(){
      this._http.get(this.url);
    }

 
  getProducts(): Observable<Object>{
    return this._http.get(this.url);
  }

  addCounter(data:IProduct){

    this.newdata={id:data.id,name:data.name,counter:1};
          
          if(this.counts.length===0){
          this.counts.push(this.newdata)
          console.log(" IN IF")
          console.log(this.counts.length)
        }
        else if(this.counts.findIndex(x=> x.id === this.newdata.id)>-1)
        {
          let index = this.counts.findIndex(x=> x.id === this.newdata.id)
          this.counts[index].counter++;
          console.log(" IN ELSE IF")
        }
        else
        {console.log(" IN ELSE ")
          this.counts.push(this.newdata);
        }
      // console.log(this.counts.findIndex(x=> x.id === this.newdata.id))
        this.counts.forEach(x => console.log(x.counter))
        console.log(this.counts)
         
  }

  getOne(id) : Observable<any> {

    return this._http.get(`${this.url}/${id}`).pipe(map( (res) =>
        
        { 
        return res;  
        }
      ))
  } 

  getChartData(){
    let sortedArray: Count[] = this.counts.sort((obj1, obj2) => {
      if (obj1.counter < obj2.counter) {
          return 1;
      }
  
      if (obj1.counter > obj2.counter) {
          return -1;
      }
  
      return 0;
  });
  console.log(sortedArray)
    return this.counts;
  }

  addProduct(formData) {  

     console.log("This called")
    let id = uuid();
    
        console.log("INSIDE SERVICE FINISH")
        return this._http.post(this.url, formData ,this.httpOptions)

  }

  editProduct(product , id) {
    
    let edittedURL = `${this.url}/${id}`;
        return this._http.put(edittedURL, product, this.httpOptions);
  }

  removeProduct(id:string[]) {
    
   
      for( let i=0; i<id.length; i++) {
          this._http.delete('http://localhost:3000/products/' + id[i]).subscribe();
      }

  }

}