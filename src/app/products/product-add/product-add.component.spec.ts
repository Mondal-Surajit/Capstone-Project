import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add.component'
import { ProductsService } from '../products.service' 
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../product.model'
import { RouterTestingModule } from '@angular/router/testing';


class MockProductService {
  products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([
    {
        "id": "843cccd1-c007-4d6b-934d-f36225375674",
        "name": "Samsung Galaxy S10",
        "description": "Samsung Full Touch Screen Android Phone",
        "manufacturer": "Samsung",
        "price": 35000,
        "qty": 23
      },
      {
        "id": "b6d092b5-d693-4027-8a04-bfa01a52e150",
        "name": "Moto G5",
        "description": "New Motorola touch screen phone with new quad core processor for Online Gaming",
        "manufacturer": "Motorola",
        "price": 27000,
        "qty": 15
      },
  ]);
  
  getProducts(): BehaviorSubject<IProduct[]> {
    return this.products;
  }

  addProduct(product: IProduct) {
    let tempProducts = this.products.getValue();
    tempProducts.push(product);
    this.products.next(tempProducts);
  }
};

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        ReactiveFormsModule
    ],
      declarations: [ ProductAddComponent ],
      providers:    [ {provide: ProductsService, useClass: MockProductService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render heading in a h2 tag`, () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h2').textContent).toEqual('Add New Product');
    
  });

  it(`should render Product Name as label`, () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('form').querySelector('label[for="name"]').textContent).toEqual('Product Name');
  });

  it(`should render a text box to accept product name`, () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('form').querySelector('input[type="text"][name="name"]')).toBeTruthy();
  });

  it(`should render Product description as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('label[for="desc"]').textContent).toEqual('Product description');
  });

  it(`should render a text box to accept product description`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('input[type="text"][name="desc"]')).toBeTruthy();
  });

  it(`should render Product Manufacturer as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('label[for="manu"]').textContent).toEqual('Manufacturer');
  });

  it(`should render a text box to accept product name`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('input[type="text"][name="manu"]')).toBeTruthy();
  });

  it(`should render Price as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('label[for="price"]').textContent).toEqual('Price');
  });

  it(`should render a text box to accept product Price`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('input[type="number"][name="price"]')).toBeTruthy();
  });

  it(`should render Quantity as label`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('label[for="qty"]').textContent).toEqual('Quantity');
  });

  it(`should render a text box to accept product quantity`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('input[type="number"][name="qty"]')).toBeTruthy();
  });


  it(`should render a submit button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('button[type="submit"]').textContent).toEqual('Submit');
  });

  it(`should render a Close button`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').querySelector('button[type="button"]').textContent).toEqual('Close');
  });


});
