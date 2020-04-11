import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ProductsService } from './products.service';
import { IProduct } from './product.model';

describe('ProductService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let prodService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ProductsService
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    prodService = TestBed.inject(ProductsService);
  });

  afterEach(() => {
  // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  })
  describe('getProduct', () => {
    let expectedProducts: IProduct[];

    beforeEach(() => {
        expectedProducts = [
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
          }
       ] as IProduct[];
    });

    it('should return expected products (called once)', () => {

        prodService.getProducts().subscribe(
          products => expect(products).toEqual(expectedProducts, 'should return expected products'),
        fail
      );

      // EmployeesService should have made one request to GET products from expected URL
      const req = httpTestingController.expectOne(prodService.url);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock products
      req.flush(expectedProducts);
    });
  });

  describe('addProduct', () => {
    let expectedAddProduct: IProduct;
    expectedAddProduct = {
        id: "b6d092b5-d693-4027-8a04-bfa01a52e150",
        name: "New Data G5",
        description: "New Data for testing",
        manufacturer: "Motorola",
        price: 20000,
        qty: 18
      };

    it('should add an product and return with id inserted ', () => {

      const productToAdd: IProduct = {
        id: "b6d092b5-d693-4027-8a04-bfa01a52e150",
        name: "New Data G5",
        description: "New Data for testing",
        manufacturer: "Motorola",
        price: 20000,
        qty: 18
      };

      prodService.addProduct(productToAdd).subscribe(
        data => expect(data).toEqual(expectedAddProduct, 'should return the product with id inserted'),
        fail
      );

      // EmployeesService should have made one request to POST employee
      const req = httpTestingController.expectOne(prodService.url);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(productToAdd);

      // Expect server to return the product after POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: expectedAddProduct });
      req.event(expectedResponse);
    });
  });

});
