import { Component, OnInit, Input} from '@angular/core';
import {RegloginService} from '../reglogin.service'
import {User} from '../_models/user'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile.component.html' ,
})
export class ProfileComponent implements OnInit {
  
  constructor(private _service:RegloginService) { 
    this.user=this._service.getProfile();
    console.log(this.user)
  }

  user:User;
  
  show:boolean;
  ngOnInit(): void {
  }

  showprofile(){
    this.show=true;
    console.log(this.user);
}

}
