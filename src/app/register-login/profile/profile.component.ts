import { Component, OnInit, Input} from '@angular/core';
import {RegloginService} from '../reglogin.service'
import {User} from '../_models/user'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile.component.html' ,
})
export class ProfileComponent implements OnInit {
  
  constructor(private _service:RegloginService) { 
    
  }

  user:User={
    id:null,
    mailid: null,
    password: null,
    firstname: null,
    lastname: null,
    location: null,
    mobile:null,
  }
  
  show:boolean;
  ngOnInit(): void {
    this.showprofile();
  }

  isLoggedIn() {
    return this._service.isLoggedIn();
  }


  showprofile(){
    if(this.isLoggedIn()){
    this.show=true;
    let user= localStorage.getItem('routeguard-app-login')
   this.user= JSON.parse(user);
  }
}

}
