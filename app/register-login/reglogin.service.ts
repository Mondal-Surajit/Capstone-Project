import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';





@Injectable()
export class RegloginService {
  private url = "http://localhost:3000/users";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    login() {
      localStorage.setItem('routeguard-app-login', "1");
      
    }

    logout() {
      localStorage.removeItem('routeguard-app-login');
     
    }
  
    isLoggedIn() {
      if (localStorage.getItem('routeguard-app-login') != null)
     
        return true;
      else
        return false;
    }

   
    
 
    ifexists(username:string,password:string):boolean{
      let url='http://localhost:3000/users?mailid='
     if( this._http.get(`${url}+${username}+'&password='+${password}`))
     {
      this.login();
      return true;

    }

     else
     {
       return false;
       

     }
}
  
   adduser(formData) {  

        
        this._http.post('http://localhost:3000/users', formData ,this.httpOptions).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )
     

  }

  

  

}