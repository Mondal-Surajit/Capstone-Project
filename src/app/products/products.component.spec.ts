import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service' 
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product.model'
import {SearchFilterPipe} from '../shared/search-filter.pipe'

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

  
};

describe('ProductsComponent', () => {
  // Component Class testing
  describe('Component Class', () => {
    let comp: ProductsComponent;
    let productsService: ProductsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        // provide the component-under-test and dependent service
        providers: [SearchFilterPipe,
          ProductsComponent,
          { provide: ProductsService, useClass: MockProductService }
        ]
      });
      // inject both the component and the dependent service.
      comp = TestBed.inject(ProductsComponent);
      productsService = TestBed.inject(ProductsService);
    });

    it('should not have products list after construction', () => {
      expect(comp.products).toBeFalsy();
    });

    it('should have products list after Angular calls ngOnInit', () => {
      comp.ngOnInit();
      expect(comp.products.length).toEqual(2);
    });

    it('should toggle customize view on Button Press', () => {
      expect(comp.show).toBe(true, 'Do Not Display checkbox to customize view');
      comp.showMenu();
      expect(comp.show).toBe(false, 'Display checkbox to customize view');
      comp.showMenu();
      expect(comp.show).toBe(true, 'Do Not Display checkbox to customize view');
    })

    it('should hide field Name based on checkbox selection', () => {
      expect(comp.pname).toBe(true, 'shows Name in Card');
      comp.name();
      expect(comp.pname).toBe(false, 'hide Name in Card');
    })
    it('should hide field Description based on checkbox selection', () => {
      expect(comp.pdesc).toBe(true, 'shows Description in Card');
      comp.desc();
      expect(comp.pdesc).toBe(false, 'hide Description in Card');
    })
    it('should hide field Manufacturer based on checkbox selection', () => {
      expect(comp.pmanu).toBe(true, 'shows Manufacturer in Card');
      comp.manu();
      expect(comp.pmanu).toBe(false, 'hide Manufacturer in Card');
    })
    it('should hide field Price based on checkbox selection', () => {
      expect(comp.pprice).toBe(true, 'shows Price in Card');
      comp.price();
      expect(comp.pprice).toBe(false, 'hide Price in Card');
    })
    it('should hide field Quantity based on checkbox selection', () => {
      expect(comp.pqty).toBe(true, 'shows Quantity in Card');
      comp.qty();
      expect(comp.pqty).toBe(false, 'hide Quantity in Card');
    })
  });

  // Component DOM testing
  describe('Component DOM', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;
    let productsService: ProductsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductsComponent ,SearchFilterPipe],
        providers: [ { provide: ProductsService, useClass: MockProductService } ]
      })
      .compileComponents();
      productsService = TestBed.inject(ProductsService);
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(`should render title in a h1 tag`, () => {
      const fixture = TestBed.createComponent(ProductsComponent);
      fixture.detectChanges();
      const appElement: HTMLElement = fixture.nativeElement;
      const h1: HTMLElement = appElement.querySelector('h1');
      expect(h1.textContent).toEqual('Product List');
    });

    it(`should render a input text box`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
    });
    it(`should render a customize view button `, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button[name="customize"]')).toBeTruthy();
    });
    it(`should render a Add button`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('a[name="add"]')).toBeTruthy();
    });

   

    it(`should a tag in Edit Product Button`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('button[name="edit"]')).toBeTruthy();
    });

    it(`should a tag in View Product Achor tag`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('a[name="detail"]')).toBeTruthy();
    });

    it(`should a tag in Edit Product Column`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('input[type="checkbox"]')).toBeTruthy();
    });

    
  });
});

