import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, timeout } from 'rxjs/operators';
import { RegloginService } from '../reglogin.service';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";
import { User } from '../_models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
    exists:boolean;
    showModal: boolean;
    users:User[];
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private _service:RegloginService,
      private location: Location,
      private _router:Router
  ) {
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);

    }
     
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      this._service.getProfiles().subscribe(users => {
        this.users = users;
        
    } )
      
      
  }

 

  

  isLoggedIn()
  {
    
    return this._service.isLoggedIn();
    
  }
 

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
     
    
   let filterResult: User[]= this.users.filter(u => 
    u.mailid == this.f.username.value && u.password == this.f.password.value);
    let user= filterResult[0];
    if(user==undefined)
    {window.alert("LOGIN FAILED !! Incorrect ID / Password");
    this.submitted=false;
    this.loginForm.reset();
      return;
  }
    console.log(user)
    let val=this._service.ifexists(user,this.f.username.value,this.f.password.value)
       this.showModal=val;
    if(val)
    {
    this.showModal = this.exists;
    this._router.navigate(['profile'])
    this.loginForm.reset();
    this.submitted=false;
    console.log('LOGIN SUCESSFUL')
    }
  }
  

}
