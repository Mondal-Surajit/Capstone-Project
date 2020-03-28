import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegloginService } from '../reglogin.service';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";



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

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private _service:RegloginService,
      private location: Location
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
      
  }
  
  isLoggedIn() {
    
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
    this.exists =this._service.ifexists(this.f.username.value, this.f.password.value)
    this.showModal = this.exists;
    this.location.back();
    this.loginForm.reset();
    this.submitted=false;
  } 

}
