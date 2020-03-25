import { Component, OnInit, Input } from '@angular/core';
import {RegloginService} from '../reglogin.service'

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile.component.html' ,
})
export class ProfileComponent implements OnInit {
  showModal:boolean = false;
  constructor(private _service:RegloginService) { }
  @Input() show:boolean;
  ngOnInit(): void {
console.log("In view Profile")
  }
  hide()
  {
    this.showModal = false;
  }

  

  

}
