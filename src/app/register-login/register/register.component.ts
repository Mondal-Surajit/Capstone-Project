import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegloginService } from '../reglogin.service';
import * as uuid from 'uuid';


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
  }

  ngOnInit() {

    this.registerForm = this._fb.group({

      mailid: ['', [Validators.required , Validators.minLength(1)]],
      password: ['', [Validators.required , Validators.minLength(1)]],
      firstname: ['', [Validators.required , Validators.minLength(1)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]],
      location: ['', [Validators.required, Validators.minLength(1)]],
      mobile: ['', [Validators.required, Validators.minLength(1)]],
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
 



