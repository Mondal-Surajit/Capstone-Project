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

    it('should hide table column Name based on checkbox selection', () => {
      expect(comp.pname).toBe(true, 'shows Name Column in the Table');
      comp.name();
      expect(comp.pname).toBe(false, 'hide Name Column in the Table');
    })
    it('should hide table column Description based on checkbox selection', () => {
      expect(comp.pdesc).toBe(true, 'shows Description Column in the Table');
      comp.desc();
      expect(comp.pdesc).toBe(false, 'hide Description Column in the Table');
    })
    it('should hide table column Manufacturer based on checkbox selection', () => {
      expect(comp.pmanu).toBe(true, 'shows Manufacturer Column in the Table');
      comp.manu();
      expect(comp.pmanu).toBe(false, 'hide Manufacturer Column in the Table');
    })
    it('should hide table column Price based on checkbox selection', () => {
      expect(comp.pprice).toBe(true, 'shows Price Column in the Table');
      comp.price();
      expect(comp.pprice).toBe(false, 'hide Price Column in the Table');
    })
    it('should hide table column Quantity based on checkbox selection', () => {
      expect(comp.pqty).toBe(true, 'shows Quantity Column in the Table');
      comp.qty();
      expect(comp.pqty).toBe(false, 'hide Quantity Column in the Table');
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

    it(`should render a table heading Product Name`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('th').textContent).toEqual("Product Name");
    });

    it(`should render a table heading Description`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[1].textContent).toEqual('Description');
    });

    it(`should render a table heading Manufacturer`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[2].textContent).toEqual('Manufacturer');
    });

    it(`should render a table heading Price`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[3].textContent).toEqual('Price');
    });

    it(`should render a table heading Quantity`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[4].textContent).toEqual('Quantity');
    });
    it(`should render a table heading Edit Product`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[5].textContent).toEqual('Edit Product');
    });

    it(`should render a table heading View Detail`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[6].textContent).toEqual('View Detail');
    });

    it(`should render a table heading Select to Delete`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('th')[7].textContent).toEqual('Select to Delete');
    });

    it(`should a tag in Edit Product Button`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr')[0].
      querySelectorAll('td')[5].querySelector('button[name="edit"]')).toBeTruthy();
    });

    it(`should a tag in View Product Achor tag`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr')[0].
      querySelectorAll('td')[6].querySelector('a[name="detail"]')).toBeTruthy();
    });

    it(`should a tag in Edit Product Column`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr')[0].
      querySelectorAll('td')[7].querySelector('input[type="checkbox"]')).toBeTruthy();
    });

    it(`should render 2 rows of data`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr').length).toEqual(2);
    })

    it(`should render first Product Name as Samsung Galaxy S10`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr')[0].
              querySelectorAll('td')[0].textContent).toEqual('Samsung Galaxy S10');
    })

    it(`should render second Product Name as Moto G5`, () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('tbody').querySelectorAll('tr')[1].
              querySelectorAll('td')[0].textContent).toEqual('Moto G5');
    })
  
  });
});

