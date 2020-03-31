import { Injectable , OnInit} from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';
import { map } from 'rxjs/operators';
import { User } from './_models/user';




@Injectable()
export class RegloginService {
  private url = "http://localhost:3000/users/";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
users:User[];
user:User;
nam:string;
pswd:string;


    ngOnInit() {
  }


    constructor (private _http: HttpClient) { 

    }

 

    getProfile(): User{
      return this.user;
      
    }

    getProfiles ():Observable<any> 
    {
       return this._http.get('http://localhost:3000/users/').pipe(map(res =>
      {
        return res;  
      }
      ))
    }

    login() {
      localStorage.setItem('routeguard-app-login', JSON.stringify(this.user));
      
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
  

    ifexists(userdata:User,username:string,password:string):boolean{
      this.user=userdata;
      
     if(this.user.mailid==username&&this.user.password==password  )
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

    return true;
     

  }

 

  

}