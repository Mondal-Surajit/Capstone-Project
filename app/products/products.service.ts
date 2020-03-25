import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';
import { IProduct } from './product.model';




@Injectable()
export class ProductsService {
  private url = "http://localhost:3000/products";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

 
  getProducts(): Observable<Object>{
    return this._http.get(this.url);
  }


  addProduct(formData) {  

     console.log("This called")
    let id = uuid();
    
        console.log("INSIDE SERVICE FINISH")
        return this._http.post(this.url, formData ,this.httpOptions)

  }

  editProduct(id, product) {
    
    let edittedURL = `${this.url}/${id}`;
        return this._http.put(edittedURL, product, this.httpOptions);
  }

  removeProduct(id) {
    
    let deleteURL = `${this.url}/${id}`;
    //return this._http.delete<void>(deleteURL);
    return this._http.delete(deleteURL);



  }

}