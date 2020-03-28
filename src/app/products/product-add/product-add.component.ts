import { Component, OnInit,Input, Output, EventEmitter, ViewChild, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../product.model';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import * as uuid from 'uuid';



@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  @Input() product: IProduct;
  @Output() finish = new EventEmitter();
  addform: FormGroup;
  showModal: boolean;
  
  submitted = false;

  constructor(private _fb: FormBuilder) { }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  ngOnInit() {
    
    this.addform = this._fb.group({
      
      name: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required, Validators.minLength(10)]],
      manuf: ['', [Validators.required, Validators.minLength(5)]],
      price:['', [Validators.required, Validators.minLength(2)]],
      qty:['', [Validators.required, Validators.minLength(1)]],
  });
   }

   get f() { return this.addform.controls; }


   onSubmit()
   
   {
    this.submitted = true;
 
    if (this.addform.invalid) {
      return;
  }


  if(this.submitted)
  {
    this.showModal = false;
    
    

    this.finish.emit({
      prod : {
        "id":uuid.v4(),
        "name": this.addform.get('name').value,
        "description": this.addform.get('desc').value,
        "manufacturer": this.addform.get('manuf').value,
        "price":this.addform.get('price').value,
        "qty":this.addform.get('qty').value,
      }
    });

this.addform.reset()


  }



}


}
