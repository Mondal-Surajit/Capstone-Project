import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<h2> Product Inventory </h2>
  <p> This project is a small Angular app for products inventory  <p>`,
  
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
