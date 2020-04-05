import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegloginService } from '../reglogin.service';
import * as uuid from 'uuid';

function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}
 
function passMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length < 6)
      return { 'minlength': true };
  }
  return null;
}
 
function firstNameMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length < 4)
      return { 'minlength': true };
  }
  return null;
}
 
function lastNameMinLength(ctrl: AbstractControl): { [key: string]: boolean } | null {
  if (ctrl.value != null) {
    if (ctrl.value.length == 0)
      return { 'required': true };
    else if (ctrl.value.length <4 )
      return { 'minlength': true };
  }
  return null;
}
 
function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email && email.indexOf("@") != -1) {
    let [_, domain] = email.split("@");
    if (domain !== "example.com") {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  registerForm:FormGroup;
  submitted = false;
  showModal: boolean;
  show:boolean;
  constructor(private _fb: FormBuilder, private router: Router, private _service:RegloginService,private _router:Router) { }

 
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  hidealert() {
    this.show=false;
    this.router.navigate(['login']);
  }

  ngOnInit() {

    this.registerForm = this._fb.group({

      mailid: ['', [Validators.required , Validators.email,Validators.pattern("[^ @]*@[^ @]*"),emailDomainValidator]],
      password: ['', [Validators.required , Validators.minLength(6),passMinLength]],
      firstname: ['', [Validators.required , Validators.minLength(4),firstNameMinLength]],
      lastname: ['', [Validators.required, Validators.minLength(4),lastNameMinLength]],
      location: ['', [Validators.required, Validators.minLength(1)]],
      mobile: ['', [Validators.required, phoneNumberValidator]],
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() 
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }


    if(this.submitted)
    {
      this.showModal = true
      let newuser = {
        "id":uuid.v4(),
        "mailid": this.registerForm.get('mailid').value,
        "password": this.registerForm.get('password').value,
        "firstname": this.registerForm.get('firstname').value,
        "lastname":this.registerForm.get('lastname').value,
        "location" : this.registerForm.get('location').value,
        "mobile": this.registerForm.get('mobile').value
      }
        
        this.show=this._service.adduser(newuser)
        
      }
      this.registerForm.reset()
      
      this.submitted=false;
      
    }
  }
 



