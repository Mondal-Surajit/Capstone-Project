import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';
import { IProduct } from './product.model';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductsService {
  private url = "http://localhost:3000/products";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    ngOnit(){
      this._http.get(this.url);
    }

 
  getProducts(): Observable<Object>{
    return this._http.get(this.url);
  }

  getProduct(id):any {
    let edittedURL = `${this.url}/${id}`;
    return this._http.get(edittedURL,this.httpOptions)
  }

  getOne(id) : Observable<any> {

    return this._http.get(`${this.url}/${id}`).pipe(map(res =>
      {
        return res;  
           
      }
      ))
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